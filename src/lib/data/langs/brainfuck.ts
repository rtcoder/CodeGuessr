import type { CodeQuestion } from '$lib/types';

const brainfuck: CodeQuestion[] = [
  {
    id: "brainfuck-loop-counter",
    language: "Brainfuck",
    aliases: ["brainfuck", "bf", "brainfuck"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Befunge", "INTERCAL", "Whitespace", "Malbolge"],
    discriminators: ["brainfuck symbols only", "loop brackets", "pointer movement", "cell increment/decrement"],
    explanation: "This is Brainfuck. This snippet uses brainfuck symbols only, loop brackets, pointer movement as recognizable fingerprints.",
    code: `+++++[>+++++<-]>.
>++++++++[<++++++>-]<.`
  },
  {
    id: "brainfuck-input-copy",
    language: "Brainfuck",
    aliases: ["brainfuck", "bf", "brainfuck"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Befunge", "INTERCAL", "Whitespace", "Malbolge"],
    discriminators: ["comma input command", "dot output command", "cell loop", "minimal instruction set"],
    explanation: "This is Brainfuck. This snippet uses comma input command, dot output command, cell loop as recognizable fingerprints.",
    code: `,[.,]`
  },
  {
    id: "brainfuck-multiply",
    language: "Brainfuck",
    aliases: ["brainfuck", "bf", "brainfuck"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Befunge", "INTERCAL", "Whitespace", "Malbolge"],
    discriminators: ["nested loops", "pointer shifts", "accumulator cells", "Brainfuck arithmetic idiom"],
    explanation: "This is Brainfuck. This snippet uses nested loops, pointer shifts, accumulator cells as recognizable fingerprints.",
    code: `++>+++<[>[>+>+<<-]>>[<<+>>-]<<<-]>>.`
  }
];

export default brainfuck;
