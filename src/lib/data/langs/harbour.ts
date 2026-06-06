import type { CodeQuestion } from '$lib/types';

const harbour: CodeQuestion[] = [
  {
    id: "harbour-function-local",
    language: "Harbour",
    aliases: ["harbour", "harbour", "xharbour"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Clipper", "dBase", "FoxPro", "BASIC"],
    discriminators: ["FUNCTION declaration", "LOCAL variables", "QOut output", "RETURN NIL"],
    explanation: "This is Harbour. This snippet uses FUNCTION declaration, LOCAL variables, QOut output as recognizable fingerprints.",
    code: `FUNCTION Main()
   LOCAL aNames := { "api", "worker" }
   LOCAL cName

   FOR EACH cName IN aNames
      QOut( Upper( cName ) )
   NEXT
RETURN NIL`
  },
  {
    id: "harbour-codeblock",
    language: "Harbour",
    aliases: ["harbour", "harbour", "xharbour"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Clipper", "dBase", "FoxPro", "BASIC"],
    discriminators: ["code block {|x| ... }", "AEval function", "array literal braces", "xBase operators"],
    explanation: "This is Harbour. This snippet uses code block {|x| ... }, AEval function, array literal braces as recognizable fingerprints.",
    code: `PROCEDURE Render()
   LOCAL aScores := { 10, 20, 30 }
   AEval( aScores, {|n| QOut( n * 2 ) } )
RETURN`
  },
  {
    id: "harbour-class-method",
    language: "Harbour",
    aliases: ["harbour", "harbour", "xharbour"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Clipper", "dBase", "FoxPro", "BASIC"],
    discriminators: ["CREATE CLASS", "METHOD declaration", "DATA property", "ENDCLASS"],
    explanation: "This is Harbour. This snippet uses CREATE CLASS, METHOD declaration, DATA property as recognizable fingerprints.",
    code: `CREATE CLASS Invoice
   DATA Total
   METHOD IsLarge()
ENDCLASS

METHOD IsLarge() CLASS Invoice
RETURN ::Total > 1000`
  }
];

export default harbour;
