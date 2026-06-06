import type { CodeQuestion } from '$lib/types';

const befunge: CodeQuestion[] = [
  {
    id: "befunge-grid-arrows",
    language: "Befunge",
    aliases: ["befunge", "befunge"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Brainfuck", "INTERCAL", "LOLCODE", "Forth"],
    discriminators: ["2D instruction grid", "direction arrows", "@ terminator", "stack output"],
    explanation: "This is Befunge. This snippet uses 2D instruction grid, direction arrows, @ terminator as recognizable fingerprints.",
    code: `>987v>.v
v456<  :
>321 ^ _@`
  },
  {
    id: "befunge-stringmode",
    language: "Befunge",
    aliases: ["befunge", "befunge"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Brainfuck", "INTERCAL", "LOLCODE", "Forth"],
    discriminators: ["double quote string mode", "stack-based output", "comma output", "@ end instruction"],
    explanation: "This is Befunge. This snippet uses double quote string mode, stack-based output, comma output as recognizable fingerprints.",
    code: `>"diap"v
       >,,,,"!"@`
  },
  {
    id: "befunge-conditional",
    language: "Befunge",
    aliases: ["befunge", "befunge"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Brainfuck", "INTERCAL", "LOLCODE", "Forth"],
    discriminators: ["underscore conditional", "colon duplicate", "period integer output", "2D flow control"],
    explanation: "This is Befunge. This snippet uses underscore conditional, colon duplicate, period integer output as recognizable fingerprints.",
    code: `>:3\`!#v_@
 ^  .  <`
  }
];

export default befunge;
