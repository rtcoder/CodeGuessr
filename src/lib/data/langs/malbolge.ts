import type { CodeQuestion } from '$lib/types';

const malbolge: CodeQuestion[] = [
  {
    id: "malbolge-symbols",
    language: "Malbolge",
    aliases: ["malbolge", "malbolge"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Brainfuck", "INTERCAL", "Befunge", "Whitespace"],
    discriminators: ["Malbolge dense punctuation", "trigraph-like instruction stream", "intentionally opaque syntax", "esoteric language fingerprint"],
    explanation: "This is Malbolge. This snippet uses Malbolge dense punctuation, trigraph-like instruction stream, intentionally opaque syntax as recognizable fingerprints.",
    code: `('&%:9]!~}|z2Vxwv-,POqponl$Hjig%eB@@>`
  },
  {
    id: "malbolge-permutation",
    language: "Malbolge",
    aliases: ["malbolge", "malbolge"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Brainfuck", "INTERCAL", "Befunge", "Whitespace"],
    discriminators: ["punctuation-heavy code", "no alphabetic keywords", "Malbolge VM style", "cipher-like source"],
    explanation: "This is Malbolge. This snippet uses punctuation-heavy code, no alphabetic keywords, Malbolge VM style as recognizable fingerprints.",
    code: `=<\`#9]~6ZY32Vx/4Rs+0No-&Jk)"Fh}|Bcy?`
  },
  {
    id: "malbolge-cryptic",
    language: "Malbolge",
    aliases: ["malbolge", "malbolge"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Brainfuck", "INTERCAL", "Befunge", "Whitespace"],
    discriminators: ["cryptic printable ASCII", "self-modifying language clue", "rare esolang style", "nonstructured code"],
    explanation: "This is Malbolge. This snippet uses cryptic printable ASCII, self-modifying language clue, rare esolang style as recognizable fingerprints.",
    code: `~!@#%^&*()_+-={}[]|:;<>?/9876543210`
  }
];

export default malbolge;
