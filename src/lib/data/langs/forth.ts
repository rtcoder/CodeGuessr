import type { CodeQuestion } from '$lib/types';

const forth: CodeQuestion[] = [
  {
    id: "forth-stack-words",
    language: "Forth",
    aliases: ["forth"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "excellent",
    highlightLanguage: "forth",
    confusionGroup: ["PostScript", "Factor", "Joy", "Assembly"],
    discriminators: ["colon word definition", "stack operators", "postfix arithmetic", ". output word"],
    explanation: "This is Forth. Colon definitions, stack words like dup and swap, postfix arithmetic, and dot output are Forth fingerprints.",
    code: `: square dup * ;
: hypotenuse-squared
  square swap square + ;

3 4 hypotenuse-squared .`,
  }
];

export default forth;
