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
  }
];

export default fsharp;
