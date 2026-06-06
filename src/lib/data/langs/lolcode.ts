import type { CodeQuestion } from '$lib/types';

const lolcode: CodeQuestion[] = [
  {
    id: "lolcode-hai-visible",
    language: "LOLCODE",
    aliases: ["lolcode", "lolcode"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["BASIC", "ArnoldC", "INTERCAL", "Ruby"],
    discriminators: ["HAI/KTHXBYE delimiters", "VISIBLE output", "I HAS A variable", "LOL-style keywords"],
    explanation: "This is LOLCODE. This snippet uses HAI/KTHXBYE delimiters, VISIBLE output, I HAS A variable as recognizable fingerprints.",
    code: `HAI 1.2
I HAS A score ITZ 0
VISIBLE "score:" score
KTHXBYE`
  },
  {
    id: "lolcode-o-rly",
    language: "LOLCODE",
    aliases: ["lolcode", "lolcode"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["BASIC", "ArnoldC", "INTERCAL", "Ruby"],
    discriminators: ["O RLY? conditional", "YA RLY/NO WAI", "BOTH SAEM comparison", "LOL keywords"],
    explanation: "This is LOLCODE. This snippet uses O RLY? conditional, YA RLY/NO WAI, BOTH SAEM comparison as recognizable fingerprints.",
    code: `BOTH SAEM status AN "paid", O RLY?
  YA RLY
    VISIBLE "receipt"
  NO WAI
    VISIBLE "pending"
OIC`
  },
  {
    id: "lolcode-loop",
    language: "LOLCODE",
    aliases: ["lolcode", "lolcode"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["BASIC", "ArnoldC", "INTERCAL", "Ruby"],
    discriminators: ["IM IN YR loop", "UPPIN YR counter", "TIL condition", "IM OUTTA YR"],
    explanation: "This is LOLCODE. This snippet uses IM IN YR loop, UPPIN YR counter, TIL condition as recognizable fingerprints.",
    code: `I HAS A i ITZ 0
IM IN YR items UPPIN YR i TIL BOTH SAEM i AN 3
  VISIBLE i
IM OUTTA YR items`
  }
];

export default lolcode;
