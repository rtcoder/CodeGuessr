import type { CodeQuestion } from '$lib/types';

const piet: CodeQuestion[] = [
  {
    id: "piet-color-blocks",
    language: "Piet",
    aliases: ["piet", "piet"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Brainfuck", "Befunge", "Whitespace", "Chef"],
    discriminators: ["color codel grid", "codel size concept", "Piet visual language notation", "stack operations by hue changes"],
    explanation: "This is Piet. This snippet uses color codel grid, codel size concept, Piet visual language notation as recognizable fingerprints.",
    code: `🟥 🟥 🟨
🟦 ⬛ 🟩
🟦 🟪 ⬜`
  },
  {
    id: "piet-direction-pointer",
    language: "Piet",
    aliases: ["piet", "piet"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Brainfuck", "Befunge", "Whitespace", "Chef"],
    discriminators: ["direction pointer", "codel chooser", "black block barrier", "visual esolang semantics"],
    explanation: "This is Piet. This snippet uses direction pointer, codel chooser, black block barrier as recognizable fingerprints.",
    code: `🟥→🟨→⬛
🟦  ⬜  🟩
🟪→🟦→🟦`
  },
  {
    id: "piet-stack-colors",
    language: "Piet",
    aliases: ["piet", "piet"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Brainfuck", "Befunge", "Whitespace", "Chef"],
    discriminators: ["hue/lightness transitions", "push/pop encoded by colors", "no textual keywords", "bitmap-program representation"],
    explanation: "This is Piet. This snippet uses hue/lightness transitions, push/pop encoded by colors, no textual keywords as recognizable fingerprints.",
    code: `🟥→🟧→🟨→🟩→🟦→🟪
⬜⬜⬜
⬛`
  }
];

export default piet;
