import type { CodeQuestion } from '$lib/types';

const basic: CodeQuestion[] = [
  {
    id: "basic-line-numbers-gosub",
    language: "BASIC",
    aliases: ["basic", "basic"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["QBASIC", "Visual Basic 6", "Pascal", "Logo"],
    discriminators: ["line numbers", "GOSUB/RETURN", "PRINT statement", "FOR/NEXT loop"],
    explanation: "This is BASIC. This snippet uses line numbers, GOSUB/RETURN, PRINT statement as recognizable fingerprints.",
    code: `10 FOR I = 1 TO 3
20 GOSUB 100
30 NEXT I
40 END
100 PRINT "ITEM "; I
110 RETURN`
  },
  {
    id: "basic-data-read",
    language: "BASIC",
    aliases: ["basic", "basic"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["QBASIC", "Visual Basic 6", "Pascal", "Logo"],
    discriminators: ["DATA statement", "READ command", "RESTORE keyword", "DIM array"],
    explanation: "This is BASIC. This snippet uses DATA statement, READ command, RESTORE keyword as recognizable fingerprints.",
    code: `10 DIM SCORES(3)
20 FOR I = 1 TO 3
30 READ SCORES(I)
40 NEXT I
50 DATA 92,88,71`
  },
  {
    id: "basic-input-if",
    language: "BASIC",
    aliases: ["basic", "basic"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["QBASIC", "Visual Basic 6", "Pascal", "Logo"],
    discriminators: ["INPUT statement", "LET assignment", "IF ... THEN GOTO", "string variable suffix $"],
    explanation: "This is BASIC. This snippet uses INPUT statement, LET assignment, IF ... THEN GOTO as recognizable fingerprints.",
    code: `10 INPUT "CODE"; CODE$
20 IF CODE$ = "ADMIN" THEN GOTO 50
30 PRINT "DENIED"
40 END
50 PRINT "GRANTED"`
  }
];

export default basic;
