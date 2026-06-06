import type { CodeQuestion } from '$lib/types';

const agda: CodeQuestion[] = [
  {
    id: "agda-dependent-vector",
    language: "Agda",
    aliases: ["agda", "agda"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Idris", "Coq/Rocq", "Lean", "Haskell"],
    discriminators: ["dependent type Vec", "implicit arguments", "pattern matching clauses", "Agda unicode arrows"],
    explanation: "This is Agda. This snippet uses dependent type Vec, implicit arguments, pattern matching clauses as recognizable fingerprints.",
    code: `data Vec (A : Set) : Nat -> Set where
  []  : Vec A zero
  _∷_ : {n : Nat} -> A -> Vec A n -> Vec A (suc n)

head : {A : Set}{n : Nat} -> Vec A (suc n) -> A
head (x ∷ xs) = x`
  },
  {
    id: "agda-module-open",
    language: "Agda",
    aliases: ["agda", "agda"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Idris", "Coq/Rocq", "Lean", "Haskell"],
    discriminators: ["module declaration", "open import", "record syntax", "field declarations"],
    explanation: "This is Agda. This snippet uses module declaration, open import, record syntax as recognizable fingerprints.",
    code: `module Billing where

open import Data.Nat

record Invoice : Set where
  field
    id : Nat
    total : Nat`
  },
  {
    id: "agda-with-pattern",
    language: "Agda",
    aliases: ["agda", "agda"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Idris", "Coq/Rocq", "Lean", "Haskell"],
    discriminators: ["with abstraction", "pattern clauses", "Maybe type", "unicode symbols"],
    explanation: "This is Agda. This snippet uses with abstraction, pattern clauses, Maybe type as recognizable fingerprints.",
    code: `lookupLabel : Maybe Nat -> String
lookupLabel value with value
... | nothing = "missing"
... | just n = "id"`
  }
];

export default agda;
