import type { CodeQuestion } from '$lib/types';

const fsharp: CodeQuestion[] = [
  {
    id: "fsharp-pipeline-option",
    language: "F#",
    aliases: ["f#", "fsharp", "fs", "f-sharp"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "fsharp",
    confusionGroup: ["OCaml", "Haskell", "Scala", "C#"],
    discriminators: ["let binding", "|> pipeline operator", "Option.map/defaultValue", "pattern matching style"],
    explanation: "This is F#. The |> pipeline, Option module helpers, let bindings, and ML-family syntax with .NET-flavored names identify it.",
    code: `let label user =
    user.Email
    |> Option.map (fun email -> $"{user.Name} <{email}>")
    |> Option.defaultValue user.Name

let activeLabels users =
    users
    |> List.filter _.IsActive
    |> List.map label`,
  },
  {
    id: "fsharp-computation-expression",
    language: "F#",
    aliases: ["f#","fsharp","fs","f-sharp"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "fsharp",
    confusionGroup: ["OCaml","Haskell","Scala","C#"],
    discriminators: ["computation expression","let! binding","async workflow","return keyword"],
    explanation: "This is F#. This snippet uses a distinct F# idiom: computation expression, let! binding, async workflow.",
    code: `let fetchBoth a b = async {
    let! left = fetch a
    let! right = fetch b
    return left + right
}`,
  },
  {
    id: "fsharp-active-pattern",
    language: "F#",
    aliases: ["f#","fsharp","fs","f-sharp"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "fsharp",
    confusionGroup: ["OCaml","Haskell","Scala","C#"],
    discriminators: ["active pattern","|Even|Odd| cases","pattern matching function","match expression"],
    explanation: "This is F#. This snippet uses a distinct F# idiom: active pattern, |Even|Odd| cases, pattern matching function.",
    code: `let (|Even|Odd|) value =
    if value % 2 = 0 then Even else Odd

let label = function
    | Even -> "even"
    | Odd -> "odd"`,
  }
];

export default fsharp;
