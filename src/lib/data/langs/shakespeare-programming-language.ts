import type { CodeQuestion } from '$lib/types';

const shakespeareProgrammingLanguage: CodeQuestion[] = [
  {
    id: "shakespeare-act-scene",
    language: "Shakespeare Programming Language",
    aliases: ["shakespeare programming language", "shakespeare", "spl"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Chef", "LOLCODE", "ArnoldC", "INTERCAL"],
    discriminators: ["Act/Scene headings", "dramatis personae", "character dialogue", "Shakespearean syntax"],
    explanation: "This is Shakespeare Programming Language. This snippet uses Act/Scene headings, dramatis personae, character dialogue as recognizable fingerprints.",
    code: `The Billing Tragedy.

Romeo, a young account.
Juliet, a graceful invoice.

Act I: The Payment.
Scene I: The balance.

Romeo:
You are as lovely as the sum of a noble noble and a brave hero.`
  },
  {
    id: "shakespeare-enter-exit",
    language: "Shakespeare Programming Language",
    aliases: ["shakespeare programming language", "shakespeare", "spl"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Chef", "LOLCODE", "ArnoldC", "INTERCAL"],
    discriminators: ["Enter/Exit directives", "character names as variables", "Speak your mind", "theatrical program flow"],
    explanation: "This is Shakespeare Programming Language. This snippet uses Enter/Exit directives, character names as variables, Speak your mind as recognizable fingerprints.",
    code: `Act I: The Queue.
Scene I: Workers arrive.

[Enter Hamlet and Ophelia]

Hamlet:
Speak your mind!

[Exit Ophelia]`
  },
  {
    id: "shakespeare-comparison",
    language: "Shakespeare Programming Language",
    aliases: ["shakespeare programming language", "shakespeare", "spl"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Chef", "LOLCODE", "ArnoldC", "INTERCAL"],
    discriminators: ["poetic comparisons", "character assignment", "scene structure", "SPL natural-language operations"],
    explanation: "This is Shakespeare Programming Language. This snippet uses poetic comparisons, character assignment, scene structure as recognizable fingerprints.",
    code: `Act II: The Check.
Scene I: A comparison.

Macbeth:
Am I better than a fine summer day?

Lady Macbeth:
You are the sum of yourself and a golden apple.`
  }
];

export default shakespeareProgrammingLanguage;
