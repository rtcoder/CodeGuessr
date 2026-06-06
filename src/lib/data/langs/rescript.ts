import type { CodeQuestion } from '$lib/types';

const rescript: CodeQuestion[] = [
  {
    id: "rescript-pipe-switch",
    language: "ReScript",
    aliases: ["rescript", "rescript", "res"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["ReasonML", "OCaml", "PureScript", "TypeScript"],
    discriminators: ["Belt.Array", "pipe operator", "switch expression", "variant cases"],
    explanation: "This is ReScript. This snippet uses Belt.Array, pipe operator, switch expression as recognizable fingerprints.",
    code: `type event =
  | Created(string)
  | Deleted(string)

let labels = events =>
  events
  ->Belt.Array.map(event =>
    switch event {
    | Created(id) => "created:" ++ id
    | Deleted(id) => "deleted:" ++ id
    }
  )`
  },
  {
    id: "rescript-jsx-component",
    language: "ReScript",
    aliases: ["rescript", "rescript", "res"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["ReasonML", "OCaml", "PureScript", "TypeScript"],
    discriminators: ["@react.component decorator", "JSX return", "props syntax", "ReScript React style"],
    explanation: "This is ReScript. This snippet uses @react.component decorator, JSX return, props syntax as recognizable fingerprints.",
    code: `@react.component
let make = (~name: string, ~count: int) => {
  <section>
    <h2> {React.string(name)} </h2>
    <span> {React.int(count)} </span>
  </section>
}`
  },
  {
    id: "rescript-external-binding",
    language: "ReScript",
    aliases: ["rescript", "rescript", "res"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["ReasonML", "OCaml", "PureScript", "TypeScript"],
    discriminators: ["@module external", "external binding", "typed JS interop", "unit return"],
    explanation: "This is ReScript. This snippet uses @module external, external binding, typed JS interop as recognizable fingerprints.",
    code: `@module("node:fs")
external readFileSync: string => string = "readFileSync"

let config = path => {
  let raw = readFileSync(path)
  Js.Json.parseExn(raw)
}`
  }
];

export default rescript;
