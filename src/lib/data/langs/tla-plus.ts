import type { CodeQuestion } from '$lib/types';

const tlaPlus: CodeQuestion[] = [
  {
    id: "tla-plus-action",
    language: "TLA+",
    aliases: ["tla+", "tla", "tlaplus"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "tla",
    confusionGroup: ["Alloy", "Coq/Rocq", "Lean", "Z notation"],
    discriminators: ["MODULE header", "VARIABLES", "/\\ conjunction", "primed variable state updates"],
    explanation: "This is TLA+. MODULE headers, VARIABLES, temporal-spec operators, and primed next-state variables are TLA+ fingerprints.",
    code: `---- MODULE Counter ----
VARIABLES count

Init == count = 0

Next ==
  \\/ count < 10 /\\ count' = count + 1
  \\/ count = 10 /\\ count' = count

Spec == Init /\\ [][Next]_count
====`,
  },
  {
    id: "tlaplus-set-comprehension",
    language: "TLA+",
    aliases: ["tla+","tla","tlaplus"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "tla",
    confusionGroup: ["Alloy","Coq/Rocq","Lean","Z notation"],
    discriminators: ["set comprehension","SUBSET operator","TLA+ module constants","mathematical notation"],
    explanation: "This is TLA+. This snippet uses a distinct TLA+ idiom: set comprehension, SUBSET operator, TLA+ module constants.",
    code: `---- MODULE Permissions ----
CONSTANTS Users, Roles

Assignments == { <<u, r>> \in Users \X Roles : r \in Roles }
PowerRoles == SUBSET Roles
====`,
  },
  {
    id: "tlaplus-temporal",
    language: "TLA+",
    aliases: ["tla+","tla","tlaplus"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "tla",
    confusionGroup: ["Alloy","Coq/Rocq","Lean","Z notation"],
    discriminators: ["temporal operator []","ENABLED predicate","UNCHANGED tuple","Next action"],
    explanation: "This is TLA+. This snippet uses a distinct TLA+ idiom: temporal operator [], ENABLED predicate, UNCHANGED tuple.",
    code: `---- MODULE CounterSpec ----
VARIABLE counter

Init == counter = 0
Inc == counter' = counter + 1
Next == Inc \/ UNCHANGED <<counter>>
Spec == Init /\ [][Next]_counter
====`,
  }
];

export default tlaPlus;
