import type { CodeQuestion } from '$lib/types';

const logo: CodeQuestion[] = [
  {
    id: "logo-procedure-repeat",
    language: "Logo",
    aliases: ["logo", "logo"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Scratch", "BASIC", "Processing", "QBASIC"],
    discriminators: ["to/end procedure", "repeat command", "forward/right turtle commands", "colon parameter"],
    explanation: "This is Logo. This snippet uses to/end procedure, repeat command, forward/right turtle commands as recognizable fingerprints.",
    code: `to polygon :sides :size
  repeat :sides [
    forward :size
    right 360 / :sides
  ]
end`
  },
  {
    id: "logo-list-recursion",
    language: "Logo",
    aliases: ["logo", "logo"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Scratch", "BASIC", "Processing", "QBASIC"],
    discriminators: ["first/butfirst list primitives", "ifelse command", "output keyword", "Logo list syntax"],
    explanation: "This is Logo. This snippet uses first/butfirst list primitives, ifelse command, output keyword as recognizable fingerprints.",
    code: `to sum :items
  if empty? :items [output 0]
  output first :items + sum butfirst :items
end`
  },
  {
    id: "logo-make-variable",
    language: "Logo",
    aliases: ["logo", "logo"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Scratch", "BASIC", "Processing", "QBASIC"],
    discriminators: ["make variable command", "quoted variable name", "thing/colon variable reference", "print command"],
    explanation: "This is Logo. This snippet uses make variable command, quoted variable name, thing/colon variable reference as recognizable fingerprints.",
    code: `make "total 0
foreach [10 20 30] [
  make "total :total + ?
]
print :total`
  }
];

export default logo;
