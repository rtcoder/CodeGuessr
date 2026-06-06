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
  },
  {
    id: "purescript-newtype-derive",
    language: "PureScript",
    aliases: ["purescript","purs"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "purescript",
    confusionGroup: ["Haskell","Elm","F#","OCaml"],
    discriminators: ["newtype declaration","derive newtype instance","Effect type","show function"],
    explanation: "This is PureScript. This snippet uses a distinct PureScript idiom: newtype declaration, derive newtype instance, Effect type.",
    code: `newtype UserId = UserId String

derive newtype instance showUserId :: Show UserId

render :: UserId -> String
render value = show value`,
  },
  {
    id: "purescript-aff",
    language: "PureScript",
    aliases: ["purescript","purs"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "purescript",
    confusionGroup: ["Haskell","Elm","F#","OCaml"],
    discriminators: ["Aff monad","launchAff_","liftEffect","do notation"],
    explanation: "This is PureScript. This snippet uses a distinct PureScript idiom: Aff monad, launchAff_, liftEffect.",
    code: `main :: Effect Unit
main = launchAff_ do
  result <- fetchUser "42"
  liftEffect $ log result.name`,
  }
];

export default purescript;
