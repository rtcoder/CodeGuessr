import type { CodeQuestion } from '$lib/types';

const purescript: CodeQuestion[] = [
  {
    id: "purescript-effect-do",
    language: "PureScript",
    aliases: ["purescript", "purs"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "purescript",
    confusionGroup: ["Haskell", "Elm", "F#", "OCaml"],
    discriminators: ["module imports with Effect", "forall type quantifier", "do notation", "log from Effect.Console"],
    explanation: "This is PureScript. Effect modules, forall types, do notation, and JS-adjacent functional syntax distinguish it from Haskell and Elm.",
    code: `module Main where

import Prelude
import Effect (Effect)
import Effect.Console (log)

greet :: forall a. { name :: String | a } -> Effect Unit
greet user = do
  log ("Hello, " <> user.name)`,
  }
];

export default purescript;
