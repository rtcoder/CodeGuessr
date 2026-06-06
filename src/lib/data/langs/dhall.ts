import type { CodeQuestion } from '$lib/types';

const dhall: CodeQuestion[] = [
  {
    id: "dhall-record-type",
    language: "Dhall",
    aliases: ["dhall", "dhall"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Nix", "HCL", "Jsonnet", "YAML"],
    discriminators: ["record type annotation", "let binding", "Text interpolation", "Dhall total config syntax"],
    explanation: "This is Dhall. This snippet uses record type annotation, let binding, Text interpolation as recognizable fingerprints.",
    code: `let User = { name : Text, active : Bool }

let render = \(user : User) -> "\${user.name}:active=\${Bool/show user.active}"

in  render { name = "api", active = True }`
  },
  {
    id: "dhall-union-merge",
    language: "Dhall",
    aliases: ["dhall", "dhall"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Nix", "HCL", "Jsonnet", "YAML"],
    discriminators: ["union type", "merge function", "constructors with ./", "Dhall sum type syntax"],
    explanation: "This is Dhall. This snippet uses union type, merge function, constructors with ./ as recognizable fingerprints.",
    code: `let Status = < Pending | Failed : Text | Done : Natural >

let label = \(status : Status) ->
  merge { Pending = "pending", Failed = \(reason : Text) -> reason, Done = Natural/show } status

in label (Status.Done 42)`
  },
  {
    id: "dhall-list-record",
    language: "Dhall",
    aliases: ["dhall", "dhall"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Nix", "HCL", "Jsonnet", "YAML"],
    discriminators: ["List record type", "map function", "Natural/even", "Dhall standard function style"],
    explanation: "This is Dhall. This snippet uses List record type, map function, Natural/even as recognizable fingerprints.",
    code: `let services =
      [ { name = "api", replicas = 2 }
      , { name = "worker", replicas = 1 }
      ]

in  List/map { name : Text, replicas : Natural } Text (\(service : { name : Text, replicas : Natural }) -> service.name) services`
  }
];

export default dhall;
