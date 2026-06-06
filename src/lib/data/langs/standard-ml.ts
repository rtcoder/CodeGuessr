import type { CodeQuestion } from '$lib/types';

const standardMl: CodeQuestion[] = [
  {
    id: "standard-ml-datatype-pattern",
    language: "Standard ML",
    aliases: ["standard ml", "sml", "smlnj"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "sml",
    confusionGroup: ["OCaml", "F#", "Haskell", "ReasonML"],
    discriminators: ["datatype declaration", "fun recursive function", "pattern matching", ":: list constructor"],
    explanation: "This is Standard ML. datatype, fun, pattern matching, and :: list construction identify the ML-family syntax.",
    code: `datatype status = Active of string | Suspended

fun activeNames [] = []
  | activeNames ({status = Active name, ...} :: rest) =
      name :: activeNames rest
  | activeNames ({status = Suspended, ...} :: rest) =
      activeNames rest`,
  },
  {
    id: "standard-ml-signature-functor",
    language: "Standard ML",
    aliases: ["standard ml","sml","smlnj"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "sml",
    confusionGroup: ["OCaml","F#","Haskell","ReasonML"],
    discriminators: ["signature declaration","functor","structure argument","Standard ML module system"],
    explanation: "This is Standard ML. This snippet uses a distinct Standard ML idiom: signature declaration, functor, structure argument.",
    code: `signature ORDERED = sig
  type t
  val compare : t * t -> order
end

functor SetFn(Key : ORDERED) = struct
  type item = Key.t
  val empty = []
end`,
  },
  {
    id: "standard-ml-exception",
    language: "Standard ML",
    aliases: ["standard ml","sml","smlnj"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "sml",
    confusionGroup: ["OCaml","F#","Haskell","ReasonML"],
    discriminators: ["exception declaration","raise keyword","handle expression","pattern matching"],
    explanation: "This is Standard ML. This snippet uses a distinct Standard ML idiom: exception declaration, raise keyword, handle expression.",
    code: `exception Missing of string

fun find id [] = raise Missing id
  | find id ((key, value) :: rest) =
      if id = key then value else find id rest

fun safeFind id rows = find id rows handle Missing _ => "unknown"`,
  }
];

export default standardMl;
