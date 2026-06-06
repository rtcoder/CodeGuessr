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
  }
];

export default haskell;
