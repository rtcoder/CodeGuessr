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
  },
  {
    id: "forth-do-loop",
    language: "Forth",
    aliases: ["forth"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "excellent",
    highlightLanguage: "forth",
    confusionGroup: ["PostScript","Factor","Joy","Assembly"],
    discriminators: ["DO LOOP construct","colon definition","stack comments","postfix arithmetic"],
    explanation: "This is Forth. This snippet uses a distinct Forth idiom: DO LOOP construct, colon definition, stack comments.",
    code: `: squares ( n -- )
  0 DO I I * . LOOP ;`,
  },
  {
    id: "forth-variables",
    language: "Forth",
    aliases: ["forth"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "excellent",
    highlightLanguage: "forth",
    confusionGroup: ["PostScript","Factor","Joy","Assembly"],
    discriminators: ["VARIABLE word","! store operator","@ fetch operator","stack-based mutation"],
    explanation: "This is Forth. This snippet uses a distinct Forth idiom: VARIABLE word, ! store operator, @ fetch operator.",
    code: `VARIABLE counter

: inc ( -- )
  counter @ 1 + counter ! ;

: show ( -- ) counter @ . ;`,
  }
];

export default forth;
