import type { CodeQuestion } from '$lib/types';

const roc: CodeQuestion[] = [
  {
    id: "roc-app-header",
    language: "Roc",
    aliases: ["roc", "roc language"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Elm", "Haskell", "Gleam", "Rust"],
    discriminators: ["app header", "imports list", "main value", "Roc platform syntax"],
    explanation: "This is Roc. This snippet uses app header, imports list, main value as recognizable fingerprints.",
    code: `app "codeguessr"
    packages { pf: "https://github.com/roc-lang/basic-cli/releases" }
    imports [pf.Stdout]
    provides [main] to pf

main = Stdout.line "ready"`
  },
  {
    id: "roc-record-update",
    language: "Roc",
    aliases: ["roc", "roc language"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Elm", "Haskell", "Gleam", "Rust"],
    discriminators: ["record update syntax", "when expression", "tag union", "Roc function style"],
    explanation: "This is Roc. This snippet uses record update syntax, when expression, tag union as recognizable fingerprints.",
    code: `Status : [Pending, Done U64]

label = \\status ->
    when status is
        Pending -> "pending"
        Done id -> Num.toStr id`
  },
  {
    id: "roc-pipeline-list",
    language: "Roc",
    aliases: ["roc", "roc language"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Elm", "Haskell", "Gleam", "Rust"],
    discriminators: ["List.map", "anonymous function", "pipe operator", "Roc type annotation"],
    explanation: "This is Roc. This snippet uses List.map, anonymous function, pipe operator as recognizable fingerprints.",
    code: `activeNames : List User -> List Str
activeNames = \\users ->
    users
    |> List.keepIf \\user -> user.active
    |> List.map \\user -> user.name`
  }
];

export default roc;
