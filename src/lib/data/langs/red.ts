import type { CodeQuestion } from '$lib/types';

const red: CodeQuestion[] = [
  {
    id: "red-header-func",
    language: "Red",
    aliases: ["red", "red language"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["REBOL", "Io", "BASIC", "D"],
    discriminators: ["Red header", "func declaration", "foreach", "block syntax"],
    explanation: "This is Red. This snippet uses Red header, func declaration, foreach as recognizable fingerprints.",
    code: `Red [
  Title: "Service labels"
]

labels: func [items [block!]] [
  foreach item items [print uppercase item]
]`
  },
  {
    id: "red-reactive",
    language: "Red",
    aliases: ["red", "red language"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["REBOL", "Io", "BASIC", "D"],
    discriminators: ["reactor! object", "is reactive expression", "Red/System-adjacent style", "block object syntax"],
    explanation: "This is Red. This snippet uses reactor! object, is reactive expression, Red/System-adjacent style as recognizable fingerprints.",
    code: `counter: make reactor! [
  value: 0
  doubled: is [value * 2]
]

counter/value: 4
print counter/doubled`
  },
  {
    id: "red-parse",
    language: "Red",
    aliases: ["red", "red language"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["REBOL", "Io", "BASIC", "D"],
    discriminators: ["parse dialect", "copy word", "some rule", "Red parse syntax"],
    explanation: "This is Red. This snippet uses parse dialect, copy word, some rule as recognizable fingerprints.",
    code: `parse "id=42" [
  "id="
  copy value some digit
]
print value`
  }
];

export default red;
