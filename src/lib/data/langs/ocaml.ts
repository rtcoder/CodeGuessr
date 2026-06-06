import type { CodeQuestion } from '$lib/types';

const ocaml: CodeQuestion[] = [
  {
    id: "ocaml-variant-match",
    language: "OCaml",
    aliases: ["ocaml", "ml"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "ocaml",
    confusionGroup: ["F#", "ReasonML", "Standard ML", "Haskell"],
    discriminators: ["type variant declaration", "match ... with", "Some/None option variants", "let rec"],
    explanation: "This is OCaml. Algebraic variants, match ... with, Some/None, let rec, and semicolon-list syntax are OCaml fingerprints.",
    code: `type status =
  | Active of string
  | Suspended

let rec active_names users =
  match users with
  | [] -> []
  | { status = Active name; _ } :: rest -> name :: active_names rest
  | { status = Suspended; _ } :: rest -> active_names rest`,
  }
];

export default ocaml;
