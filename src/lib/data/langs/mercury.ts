import type { CodeQuestion } from '$lib/types';

const mercury: CodeQuestion[] = [
  {
    id: "mercury-predicate-mode",
    language: "Mercury",
    aliases: ["mercury", "mercury"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Prolog", "Haskell", "Erlang", "OCaml"],
    discriminators: [":- pred declaration", "mode annotations", "det determinism", "Prolog-like clauses"],
    explanation: "This is Mercury. This snippet uses :- pred declaration, mode annotations, det determinism as recognizable fingerprints.",
    code: `:- pred active(string::in, bool::out) is det.

active(Status, Result) :-
    ( if Status = "paid" then
        Result = yes
    else
        Result = no
    ).`
  },
  {
    id: "mercury-type-func",
    language: "Mercury",
    aliases: ["mercury", "mercury"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Prolog", "Haskell", "Erlang", "OCaml"],
    discriminators: [":- type declaration", "function mode", "pattern matching clauses", "Mercury module style"],
    explanation: "This is Mercury. This snippet uses :- type declaration, function mode, pattern matching clauses as recognizable fingerprints.",
    code: `:- type status
    ---> pending
    ;    done(int).

:- func label(status) = string.
label(pending) = "pending".
label(done(Id)) = string.from_int(Id).`
  },
  {
    id: "mercury-io-state",
    language: "Mercury",
    aliases: ["mercury", "mercury"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Prolog", "Haskell", "Erlang", "OCaml"],
    discriminators: ["io::di/io::uo state threading", "main predicate", "!IO notation", "determinism annotation"],
    explanation: "This is Mercury. This snippet uses io::di/io::uo state threading, main predicate, !IO notation as recognizable fingerprints.",
    code: `:- pred main(io::di, io::uo) is det.

main(!IO) :-
    io.write_string("ready\n", !IO).`
  }
];

export default mercury;
