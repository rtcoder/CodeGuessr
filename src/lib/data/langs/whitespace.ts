import type { CodeQuestion } from '$lib/types';

const whitespace: CodeQuestion[] = [
  {
    id: "whitespace-stack",
    language: "Whitespace",
    aliases: ["whitespace", "whitespace"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Brainfuck", "Befunge", "INTERCAL", "Malbolge"],
    discriminators: ["space/tab/newline instruction encoding", "stack push operation", "invisible syntax", "annotated whitespace sample"],
    explanation: "This is Whitespace. This snippet uses space/tab/newline instruction encoding, stack push operation, invisible syntax as recognizable fingerprints.",
    code: `␠␠⇥␠⏎
⇥␠␠
⏎⏎⏎`
  },
  {
    id: "whitespace-label",
    language: "Whitespace",
    aliases: ["whitespace", "whitespace"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Brainfuck", "Befunge", "INTERCAL", "Malbolge"],
    discriminators: ["labels encoded with whitespace", "jump instruction", "stack machine", "no visible keywords"],
    explanation: "This is Whitespace. This snippet uses labels encoded with whitespace, jump instruction, stack machine as recognizable fingerprints.",
    code: `␠␠␠⇥⏎
⏎␠␠⇥⏎
⇥⏎␠⇥`
  },
  {
    id: "whitespace-io",
    language: "Whitespace",
    aliases: ["whitespace", "whitespace"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Brainfuck", "Befunge", "INTERCAL", "Malbolge"],
    discriminators: ["character output opcode", "stack value", "tab-led instruction group", "Whitespace VM I/O"],
    explanation: "This is Whitespace. This snippet uses character output opcode, stack value, tab-led instruction group as recognizable fingerprints.",
    code: `␠␠⇥⇥␠⏎
⇥␠⇥␠
⏎⏎⏎`
  }
];

export default whitespace;
