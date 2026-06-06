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
  }
];

export default standardMl;
