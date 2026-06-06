import type { CodeQuestion } from '$lib/types';

const coqRocq: CodeQuestion[] = [
  {
    id: "coq-inductive-proof",
    language: "Coq/Rocq",
    aliases: ["coq/rocq", "coq", "rocq"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Lean", "Agda", "Idris", "Haskell"],
    discriminators: ["Inductive type", "Theorem statement", "Proof/Qed block", "destruct tactic"],
    explanation: "This is Coq/Rocq. This snippet uses Inductive type, Theorem statement, Proof/Qed block as recognizable fingerprints.",
    code: `Inductive status : Type :=
| Pending
| Done : nat -> status.

Theorem done_has_id : forall id, exists value, Done id = Done value.
Proof.
  intros id. exists id. reflexivity.
Qed.`
  },
  {
    id: "coq-fixpoint-match",
    language: "Coq/Rocq",
    aliases: ["coq/rocq", "coq", "rocq"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Lean", "Agda", "Idris", "Haskell"],
    discriminators: ["Fixpoint recursive function", "match with", "list type", "Gallina syntax"],
    explanation: "This is Coq/Rocq. This snippet uses Fixpoint recursive function, match with, list type as recognizable fingerprints.",
    code: `Fixpoint sum (values : list nat) : nat :=
  match values with
  | nil => 0
  | head :: tail => head + sum tail
  end.`
  },
  {
    id: "coq-record",
    language: "Coq/Rocq",
    aliases: ["coq/rocq", "coq", "rocq"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Lean", "Agda", "Idris", "Haskell"],
    discriminators: ["Record declaration", "field projections", "Definition", "forall quantifier"],
    explanation: "This is Coq/Rocq. This snippet uses Record declaration, field projections, Definition as recognizable fingerprints.",
    code: `Record invoice := {
  invoice_id : nat;
  paid : bool
}.

Definition is_paid (item : invoice) : bool :=
  paid item.`
  }
];

export default coqRocq;
