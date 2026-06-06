import type { CodeQuestion } from '$lib/types';

const intercal: CodeQuestion[] = [
  {
    id: "intercal-please-do",
    language: "INTERCAL",
    aliases: ["intercal", "intercal"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Brainfuck", "Befunge", "LOLCODE", "Malbolge"],
    discriminators: ["PLEASE DO syntax", "COME FROM statement", "READ OUT", "INTERCAL politeness"],
    explanation: "This is INTERCAL. This snippet uses PLEASE DO syntax, COME FROM statement, READ OUT as recognizable fingerprints.",
    code: `PLEASE DO ,1 <- #3
DO ,1 SUB #1 <- #42
PLEASE READ OUT ,1
PLEASE GIVE UP`
  },
  {
    id: "intercal-abstain",
    language: "INTERCAL",
    aliases: ["intercal", "intercal"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Brainfuck", "Befunge", "LOLCODE", "Malbolge"],
    discriminators: ["ABSTAIN FROM", "REINSTATE statement", "labelled statements", "INTERCAL control weirdness"],
    explanation: "This is INTERCAL. This snippet uses ABSTAIN FROM, REINSTATE statement, labelled statements as recognizable fingerprints.",
    code: `DO (10) NEXT
PLEASE ABSTAIN FROM (20)
(10) DO READ OUT #1
(20) DO READ OUT #2
PLEASE GIVE UP`
  },
  {
    id: "intercal-mingle-select",
    language: "INTERCAL",
    aliases: ["intercal", "intercal"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Brainfuck", "Befunge", "LOLCODE", "Malbolge"],
    discriminators: ["MINGLE operator", "SELECT operator", "spot/twospot variables", "INTERCAL operators"],
    explanation: "This is INTERCAL. This snippet uses MINGLE operator, SELECT operator, spot/twospot variables as recognizable fingerprints.",
    code: `DO .1 <- #5
DO .2 <- #3
DO .3 <- .1 ~ .2
PLEASE READ OUT .3`
  }
];

export default intercal;
