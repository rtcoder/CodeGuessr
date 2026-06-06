import type { CodeQuestion } from '$lib/types';

const clipper: CodeQuestion[] = [
  {
    id: "clipper-dbskip",
    language: "Clipper",
    aliases: ["clipper", "clipper"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Harbour", "dBase", "FoxPro", "BASIC"],
    discriminators: ["USE command", "DBSkip function", "WHILE !Eof()", "QOut output"],
    explanation: "This is Clipper. This snippet uses USE command, DBSkip function, WHILE !Eof() as recognizable fingerprints.",
    code: `USE Orders
WHILE !Eof()
   IF Orders->Total > 500
      QOut( Orders->Id )
   ENDIF
   DBSkip()
ENDDO`
  },
  {
    id: "clipper-memvar",
    language: "Clipper",
    aliases: ["clipper", "clipper"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Harbour", "dBase", "FoxPro", "BASIC"],
    discriminators: ["MEMVAR declaration", "PRIVATE variable", "macro substitution &", "xBase syntax"],
    explanation: "This is Clipper. This snippet uses MEMVAR declaration, PRIVATE variable, macro substitution & as recognizable fingerprints.",
    code: `MEMVAR cTable
PRIVATE cTable := "customers"
USE &cTable
? "Loaded", Alias()`
  },
  {
    id: "clipper-function-array",
    language: "Clipper",
    aliases: ["clipper", "clipper"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Harbour", "dBase", "FoxPro", "BASIC"],
    discriminators: ["FUNCTION block", "AAdd array function", "LEN function", "RETURN array"],
    explanation: "This is Clipper. This snippet uses FUNCTION block, AAdd array function, LEN function as recognizable fingerprints.",
    code: `FUNCTION ActiveIds( aRows )
   LOCAL aIds := {}, n
   FOR n := 1 TO Len( aRows )
      IF aRows[n]["active"]
         AAdd( aIds, aRows[n]["id"] )
      ENDIF
   NEXT
RETURN aIds`
  }
];

export default clipper;
