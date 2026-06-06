import type { CodeQuestion } from '$lib/types';

const j: CodeQuestion[] = [
  {
    id: "j-hook-fork",
    language: "J",
    aliases: ["j", "j language"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["APL", "K", "MATLAB", "Julia"],
    discriminators: ["tacit verb", "+/ reduction", "% # fork", "J glyph operators"],
    explanation: "This is J. This snippet uses tacit verb, +/ reduction, % # fork as recognizable fingerprints.",
    code: `mean =: +/ % #
scores =: 92 88 71 64
normalized =: scores % >./ scores
mean normalized`
  },
  {
    id: "j-rank",
    language: "J",
    aliases: ["j", "j language"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["APL", "K", "MATLAB", "Julia"],
    discriminators: ["rank conjunction \"", "i. index generator", "$ reshape", "matrix operation"],
    explanation: "This is J. This snippet uses rank conjunction \", i. index generator, $ reshape as recognizable fingerprints.",
    code: `matrix =: 3 4 $ i. 12
rowSums =: +/"1 matrix
colMax =: >./"2 ,: matrix`
  },
  {
    id: "j-agenda",
    language: "J",
    aliases: ["j", "j language"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["APL", "K", "MATLAB", "Julia"],
    discriminators: ["agenda @. operator", "verb definitions", "boolean dispatch", "J tacit style"],
    explanation: "This is J. This snippet uses agenda @. operator, verb definitions, boolean dispatch as recognizable fingerprints.",
    code: `label =: 'small'&[ \` 'large'&[ @. (100&<)
amounts =: 25 150 80
label each amounts`
  }
];

export default j;
