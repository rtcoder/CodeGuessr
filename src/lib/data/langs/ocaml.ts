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
  },
  {
    id: "ocaml-module-signature",
    language: "OCaml",
    aliases: ["ocaml","ml"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "ocaml",
    confusionGroup: ["F#","ReasonML","Standard ML","Haskell"],
    discriminators: ["module signature","module implementation","val declaration","struct/end"],
    explanation: "This is OCaml. This snippet uses a distinct OCaml idiom: module signature, module implementation, val declaration.",
    code: `module type STORE = sig
  type t
  val empty : t
  val put : string -> t -> t
end

module Memory : STORE = struct
  type t = string list
  let empty = []
  let put value store = value :: store
end`,
  },
  {
    id: "ocaml-result-bind",
    language: "OCaml",
    aliases: ["ocaml","ml"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "ocaml",
    confusionGroup: ["F#","ReasonML","Standard ML","Haskell"],
    discriminators: ["Result type","let* binding style","pattern matching","Ok/Error constructors"],
    explanation: "This is OCaml. This snippet uses a distinct OCaml idiom: Result type, let* binding style, pattern matching.",
    code: `let bind result f =
  match result with
  | Ok value -> f value
  | Error _ as err -> err

let parse_positive text =
  match int_of_string_opt text with
  | Some n when n > 0 -> Ok n
  | _ -> Error "invalid"`,
  }
];

export default ocaml;
