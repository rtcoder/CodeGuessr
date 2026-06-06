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
  }
];

export default tlaPlus;
