use std::error::Error;
use std::fmt;
use std::str::FromStr;

use symbolic_expressions::{parser::parse_str, Sexp, SexpError};

use crate::{
    expr::{Expr, Language, QuestionMarkName, RecExpr},
    pattern::{Pattern, WildcardKind},
};

#[derive(Debug, Clone)]
pub struct ParseError(String);
pub type Result<T> = std::result::Result<T, ParseError>;

impl fmt::Display for ParseError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "ParseError: {}", self.0)
    }
}

impl Error for ParseError {}

impl From<SexpError> for ParseError {
    fn from(e: SexpError) -> ParseError {
        ParseError(e.to_string())
    }
}

impl<L: Language + FromStr> FromStr for Pattern<L> {
    type Err = ParseError;
    fn from_str(s: &str) -> Result<Self> {
        let sexp = parse_str(s.trim())?;
        parse_term(&sexp)
    }
}

impl<L: Language + FromStr> FromStr for RecExpr<L> {
    type Err = ParseError;
    fn from_str(s: &str) -> Result<Self> {
        let pat: Pattern<L> = s.parse()?;
        pat.to_expr().map_err(ParseError)
    }
}

fn parse_term<L: Language + FromStr>(sexp: &Sexp) -> Result<Pattern<L>> {
    match sexp {
        Sexp::String(s) => {
            if s.trim() != s || s.is_empty() {
                panic!("There's whitespace!")
            }
            s.parse::<QuestionMarkName>()
                .map(|q| {
                    let kind = if q.as_ref().ends_with("...") {
                        WildcardKind::ZeroOrMore
                    } else {
                        WildcardKind::Single
                    };
                    Pattern::Wildcard(q, kind)
                })
                .or_else(|_| s.parse().map(|t| Pattern::Expr(Box::new(Expr::leaf(t)))))
                .map_err(|_| ParseError(format!("Couldn't parse '{}'", s)))
        }

        Sexp::List(vec) => {
            assert!(!vec.is_empty());
            let mut sexps = vec.iter();

            let op = match sexps.next().unwrap() {
                Sexp::String(s) => s
                    .parse::<L>()
                    .map_err(|_| ParseError(format!("bad op: {}", s)))?,
                op_sexp => return Err(ParseError(format!("expected op, got {}", op_sexp))),
            };

            let children: Result<Vec<Pattern<L>>> = sexps.map(|s| parse_term(s)).collect();

            Ok(Pattern::Expr(Expr::new(op, children?).into()))
        }
        Sexp::Empty => Err(ParseError("empty!".into())),
    }
}

#[cfg(test)]
mod tests {

    use crate::*;

    #[test]
    fn simple_parse() {
        let expr: RecExpr<String> = op("+", vec![leaf("x"), leaf("x")]);
        let expr2 = "(+ x x)".parse().unwrap();

        assert_eq!(expr, expr2);
    }
}
