import type { CodeQuestion } from '$lib/types';

const rebol: CodeQuestion[] = [
  {
    id: "rebol-block-dialect",
    language: "REBOL",
    aliases: ["rebol", "rebol"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Red", "Io", "BASIC", "Logo"],
    discriminators: ["REBOL header", "block literal", "foreach word block", "print command"],
    explanation: "This is REBOL. This snippet uses REBOL header, block literal, foreach word block as recognizable fingerprints.",
    code: `REBOL [
  Title: "Billing report"
]

foreach item ["api" "worker" "db"] [
  print uppercase item
]`
  },
  {
    id: "rebol-parse",
    language: "REBOL",
    aliases: ["rebol", "rebol"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Red", "Io", "BASIC", "Logo"],
    discriminators: ["parse dialect", "rule block", "some keyword", "REBOL dialecting"],
    explanation: "This is REBOL. This snippet uses parse dialect, rule block, some keyword as recognizable fingerprints.",
    code: `rule: [some digit "." some digit]
either parse "10.25" rule [
  print "amount"
][
  print "invalid"
]`
  },
  {
    id: "rebol-object",
    language: "REBOL",
    aliases: ["rebol", "rebol"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Red", "Io", "BASIC", "Logo"],
    discriminators: ["make object!", "word fields", "function value", "self-style object"],
    explanation: "This is REBOL. This snippet uses make object!, word fields, function value as recognizable fingerprints.",
    code: `account: make object! [
  balance: 0
  deposit: func [amount] [
    balance: balance + amount
  ]
]`
  }
];

export default rebol;
