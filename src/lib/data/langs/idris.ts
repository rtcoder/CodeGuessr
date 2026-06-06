import type { CodeQuestion } from '$lib/types';

const idris: CodeQuestion[] = [
  {
    id: "idris-dependent-vector",
    language: "Idris",
    aliases: ["idris", "idris", "idris2"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Agda", "Haskell", "Lean", "Coq/Rocq"],
    discriminators: ["Vect length index", "total function", "pattern matching", "dependent type signature"],
    explanation: "This is Idris. This snippet uses Vect length index, total function, pattern matching as recognizable fingerprints.",
    code: `total
head : Vect (S n) a -> a
head (x :: xs) = x`
  },
  {
    id: "idris-do-notation",
    language: "Idris",
    aliases: ["idris", "idris", "idris2"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Agda", "Haskell", "Lean", "Coq/Rocq"],
    discriminators: ["IO type", "do notation", "<- bind", "putStrLn"],
    explanation: "This is Idris. This snippet uses IO type, do notation, <- bind as recognizable fingerprints.",
    code: `main : IO ()
main = do
  line <- getLine
  putStrLn ("received: " ++ line)`
  },
  {
    id: "idris-interface-impl",
    language: "Idris",
    aliases: ["idris", "idris", "idris2"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Agda", "Haskell", "Lean", "Coq/Rocq"],
    discriminators: ["interface declaration", "implementation block", "where clause", "Idris typeclass syntax"],
    explanation: "This is Idris. This snippet uses interface declaration, implementation block, where clause as recognizable fingerprints.",
    code: `interface Encodable a where
  encode : a -> String

implementation Encodable Nat where
  encode value = show value`
  }
];

export default idris;
