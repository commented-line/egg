(function() {var implementors = {};
implementors["egg"] = [{"text":"impl&lt;L, D&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.145/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"egg/struct.EClass.html\" title=\"struct egg::EClass\">EClass</a>&lt;L, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.145/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.145/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["egg::eclass::EClass"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"egg/trait.Language.html\" title=\"trait egg::Language\">Language</a>, N:&nbsp;<a class=\"trait\" href=\"egg/trait.Analysis.html\" title=\"trait egg::Analysis\">Analysis</a>&lt;L&gt;&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.145/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"egg/struct.EGraph.html\" title=\"struct egg::EGraph\">EGraph</a>&lt;L, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N::<a class=\"associatedtype\" href=\"egg/trait.Analysis.html#associatedtype.Data\" title=\"type egg::Analysis::Data\">Data</a>: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.145/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.145/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.145/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["egg::egraph::EGraph"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.145/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"egg/enum.Justification.html\" title=\"enum egg::Justification\">Justification</a>","synthetic":false,"types":["egg::explain::Justification"]},{"text":"impl&lt;L:&nbsp;<a class=\"trait\" href=\"egg/trait.Language.html\" title=\"trait egg::Language\">Language</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.145/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"egg/struct.RecExpr.html\" title=\"struct egg::RecExpr\">RecExpr</a>&lt;L&gt;","synthetic":false,"types":["egg::language::RecExpr"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.145/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"egg/struct.SymbolLang.html\" title=\"struct egg::SymbolLang\">SymbolLang</a>","synthetic":false,"types":["egg::language::SymbolLang"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.145/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"egg/enum.StopReason.html\" title=\"enum egg::StopReason\">StopReason</a>","synthetic":false,"types":["egg::run::StopReason"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.145/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"egg/struct.Report.html\" title=\"struct egg::Report\">Report</a>","synthetic":false,"types":["egg::run::Report"]},{"text":"impl&lt;IterData&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.145/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"egg/struct.Iteration.html\" title=\"struct egg::Iteration\">Iteration</a>&lt;IterData&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;IterData: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.145/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["egg::run::Iteration"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.145/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"egg/struct.Id.html\" title=\"struct egg::Id\">Id</a>","synthetic":false,"types":["egg::Id"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()