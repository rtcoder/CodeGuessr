import type { CodeQuestion } from '$lib/types';

const chef: CodeQuestion[] = [
  {
    id: "chef-recipe",
    language: "Chef",
    aliases: ["chef", "chef language"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["LOLCODE", "Shakespeare Programming Language", "ArnoldC", "Befunge"],
    discriminators: ["recipe title", "Ingredients section", "Method section", "Serves line"],
    explanation: "This is Chef. This snippet uses recipe title, Ingredients section, Method section as recognizable fingerprints.",
    code: `Invoice Souffle.

Ingredients.
72 g sugar
1 paid invoice

Method.
Put sugar into mixing bowl.
Fold invoice into mixing bowl.

Serves 2.`
  },
  {
    id: "chef-mixing-bowl",
    language: "Chef",
    aliases: ["chef", "chef language"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["LOLCODE", "Shakespeare Programming Language", "ArnoldC", "Befunge"],
    discriminators: ["mixing bowl operations", "Liquefy ingredient", "Pour into baking dish", "Chef culinary syntax"],
    explanation: "This is Chef. This snippet uses mixing bowl operations, Liquefy ingredient, Pour into baking dish as recognizable fingerprints.",
    code: `Queue Stew.

Ingredients.
3 messages
1 queue

Method.
Put messages into mixing bowl.
Liquefy queue.
Pour contents of the mixing bowl into the baking dish.`
  },
  {
    id: "chef-bake-time",
    language: "Chef",
    aliases: ["chef", "chef language"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["LOLCODE", "Shakespeare Programming Language", "ArnoldC", "Befunge"],
    discriminators: ["Pre-heat oven", "Bake for minutes", "Remove from oven", "cooking metaphor program"],
    explanation: "This is Chef. This snippet uses Pre-heat oven, Bake for minutes, Remove from oven as recognizable fingerprints.",
    code: `Batch Roast.

Ingredients.
5 jobs

Method.
Put jobs into mixing bowl.
Pre-heat oven to 180 degrees.
Bake for 20 minutes.
Remove from oven.`
  }
];

export default chef;
