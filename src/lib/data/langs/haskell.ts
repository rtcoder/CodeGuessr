import type { CodeQuestion } from '$lib/types';

const haskell: CodeQuestion[] = [
  {
    id: "haskell-guards-maybe",
    language: "Haskell",
    aliases: ["haskell", "hs"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "haskell",
    confusionGroup: ["F#", "OCaml", "PureScript", "Elm"],
    discriminators: ["type signature", "Maybe", "guards", "pattern matching"],
    explanation: "This is Haskell. The :: type signature, Maybe/Just/Nothing, pattern-matched equations, and guards identify it.",
    code: `scoreLabel :: Maybe Int -> String
scoreLabel Nothing = "missing"
scoreLabel (Just score)
  | score >= 90 = "excellent"
  | score >= 70 = "steady"
  | otherwise = "needs practice"`,
  },
  {
    id: "haskell-newtype-typeclass",
    language: "Haskell",
    aliases: ["haskell","hs"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "haskell",
    confusionGroup: ["F#","OCaml","PureScript","Elm"],
    discriminators: ["newtype declaration","typeclass instance","deriving Show","function composition"],
    explanation: "This is Haskell. This snippet uses a distinct Haskell idiom: newtype declaration, typeclass instance, deriving Show.",
    code: `newtype UserId = UserId Int deriving Show

class ToKey a where
  toKey :: a -> String

instance ToKey UserId where
  toKey (UserId value) = "user:" <> show value`,
  },
  {
    id: "haskell-do-notation",
    language: "Haskell",
    aliases: ["haskell","hs"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "haskell",
    confusionGroup: ["F#","OCaml","PureScript","Elm"],
    discriminators: ["do notation","<- bind","IO type signature","putStrLn"],
    explanation: "This is Haskell. This snippet uses a distinct Haskell idiom: do notation, <- bind, IO type signature.",
    code: `promptName :: IO String
promptName = do
  putStrLn "Name?"
  name <- getLine
  pure ("hello " <> name)`,
  }
];

export default haskell;
