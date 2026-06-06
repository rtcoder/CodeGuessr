import type { CodeQuestion } from '$lib/types';

const smalltalk: CodeQuestion[] = [
  {
    id: "smalltalk-cascade",
    language: "Smalltalk",
    aliases: ["smalltalk", "smalltalk", "squeak", "pharo"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Ruby", "Objective-C", "Self", "Io"],
    discriminators: ["message cascade ;", "keyword message", "OrderedCollection", "block brackets"],
    explanation: "This is Smalltalk. This snippet uses message cascade ;, keyword message, OrderedCollection as recognizable fingerprints.",
    code: `items := OrderedCollection new
  add: 'api';
  add: 'worker';
  yourself.

active := items select: [ :each | each size > 3 ].`
  },
  {
    id: "smalltalk-class-method",
    language: "Smalltalk",
    aliases: ["smalltalk", "smalltalk", "squeak", "pharo"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Ruby", "Objective-C", "Self", "Io"],
    discriminators: ["subclass: message", "instanceVariableNames:", "method category", "^ return"],
    explanation: "This is Smalltalk. This snippet uses subclass: message, instanceVariableNames:, method category as recognizable fingerprints.",
    code: `Object subclass: #Invoice
  instanceVariableNames: 'amount status'
  classVariableNames: ''
  package: 'Billing'.

Invoice >> isPaid
  ^ status = #paid`
  },
  {
    id: "smalltalk-do-iftrue",
    language: "Smalltalk",
    aliases: ["smalltalk", "smalltalk", "squeak", "pharo"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Ruby", "Objective-C", "Self", "Io"],
    discriminators: ["do: iteration message", "ifTrue: block", "Transcript show:", "symbol literal"],
    explanation: "This is Smalltalk. This snippet uses do: iteration message, ifTrue: block, Transcript show: as recognizable fingerprints.",
    code: `#(created paid failed) do: [ :status |
  (status = #paid) ifTrue: [
    Transcript show: 'receipt'; cr
  ]
].`
  }
];

export default smalltalk;
