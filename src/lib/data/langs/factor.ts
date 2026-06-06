import type { CodeQuestion } from '$lib/types';

const factor: CodeQuestion[] = [
  {
    id: "factor-word-definition",
    language: "Factor",
    aliases: ["factor", "factor"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Forth", "Joy", "PostScript", "Io"],
    discriminators: ["colon word definition", "stack effect comment", "USING: vocabulary", "postfix combinators"],
    explanation: "This is Factor. This snippet uses colon word definition, stack effect comment, USING: vocabulary as recognizable fingerprints.",
    code: `USING: math sequences ;

: average ( seq -- n )
  dup sum swap length / ;`
  },
  {
    id: "factor-quotation-map",
    language: "Factor",
    aliases: ["factor", "factor"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Forth", "Joy", "PostScript", "Io"],
    discriminators: ["quotation [ ]", "map combinator", "keep combinator", "stack language syntax"],
    explanation: "This is Factor. This snippet uses quotation [ ], map combinator, keep combinator as recognizable fingerprints.",
    code: `USING: sequences math ;

{ 1 2 3 4 } [ sq ] map`
  },
  {
    id: "factor-tuple",
    language: "Factor",
    aliases: ["factor", "factor"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Forth", "Joy", "PostScript", "Io"],
    discriminators: ["TUPLE: declaration", "C: constructor", "slot accessors", "Factor object syntax"],
    explanation: "This is Factor. This snippet uses TUPLE: declaration, C: constructor, slot accessors as recognizable fingerprints.",
    code: `USING: accessors ;

TUPLE: invoice id total ;
C: <invoice> invoice

<invoice> total>>`
  }
];

export default factor;
