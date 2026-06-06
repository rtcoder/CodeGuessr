import type { CodeQuestion } from '$lib/types';

const lean: CodeQuestion[] = [
  {
    id: "lean-theorem-by",
    language: "Lean",
    aliases: ["lean", "lean", "lean4"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Coq/Rocq", "Agda", "Idris", "Haskell"],
    discriminators: ["theorem declaration", "by tactic block", "simp tactic", "Nat type"],
    explanation: "This is Lean. This snippet uses theorem declaration, by tactic block, simp tactic as recognizable fingerprints.",
    code: `theorem add_zero_id (n : Nat) : n + 0 = n := by
  simp`
  },
  {
    id: "lean-inductive-match",
    language: "Lean",
    aliases: ["lean", "lean", "lean4"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Coq/Rocq", "Agda", "Idris", "Haskell"],
    discriminators: ["inductive type", "deriving Repr", "match expression", "Lean namespace style"],
    explanation: "This is Lean. This snippet uses inductive type, deriving Repr, match expression as recognizable fingerprints.",
    code: `inductive Status where
  | pending
  | done (id : Nat)
  deriving Repr

def label (status : Status) : String :=
  match status with
  | .pending => "pending"
  | .done id => toString id`
  },
  {
    id: "lean-structure",
    language: "Lean",
    aliases: ["lean", "lean", "lean4"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Coq/Rocq", "Agda", "Idris", "Haskell"],
    discriminators: ["structure declaration", "field types", "def function", "dot projection"],
    explanation: "This is Lean. This snippet uses structure declaration, field types, def function as recognizable fingerprints.",
    code: `structure Invoice where
  id : Nat
  paid : Bool

def isPaid (invoice : Invoice) : Bool :=
  invoice.paid`
  }
];

export default lean;
