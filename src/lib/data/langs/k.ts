import type { CodeQuestion } from '$lib/types';

const k: CodeQuestion[] = [
  {
    id: "k-dictionary-table",
    language: "K",
    aliases: ["k", "k language", "kdb"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["APL", "J", "q", "MATLAB"],
    discriminators: ["dictionary !", "flip table", "where filter", "K terse syntax"],
    explanation: "This is K. This snippet uses dictionary !, flip table, where filter as recognizable fingerprints.",
    code: `t:flip \`sym\`qty!(\`A\`B\`A;10 25 5)
big:t where t.qty>9
sum big.qty`
  },
  {
    id: "k-adverb-each",
    language: "K",
    aliases: ["k", "k language", "kdb"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["APL", "J", "q", "MATLAB"],
    discriminators: ["each adverb", "lambda braces", "til operator", "K vector primitives"],
    explanation: "This is K. This snippet uses each adverb, lambda braces, til operator as recognizable fingerprints.",
    code: `square:{x*x}
values:!10
square'values`
  },
  {
    id: "k-over-scan",
    language: "K",
    aliases: ["k", "k language", "kdb"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["APL", "J", "q", "MATLAB"],
    discriminators: ["+/ over", "prior-style accumulation", "colon assignment", "K vector arithmetic"],
    explanation: "This is K. This snippet uses +/ over, prior-style accumulation, colon assignment as recognizable fingerprints.",
    code: `prices:100 120 90 150
total:+/prices
changes:1_prices - -1_prices`
  }
];

export default k;
