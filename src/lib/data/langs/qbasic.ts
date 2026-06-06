import type { CodeQuestion } from '$lib/types';

const qbasic: CodeQuestion[] = [
  {
    id: "qbasic-sub-end-sub",
    language: "QBASIC",
    aliases: ["qbasic", "qbasic", "quickbasic"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["BASIC", "Visual Basic 6", "Pascal", "Logo"],
    discriminators: ["SUB procedure", "END SUB", "CALL statement", "typed string suffix"],
    explanation: "This is QBASIC. This snippet uses SUB procedure, END SUB, CALL statement as recognizable fingerprints.",
    code: `DECLARE SUB RenderStatus (status$)

status$ = "paid"
CALL RenderStatus(status$)

SUB RenderStatus (status$)
  PRINT UCASE$(status$)
END SUB`
  },
  {
    id: "qbasic-select-case",
    language: "QBASIC",
    aliases: ["qbasic", "qbasic", "quickbasic"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["BASIC", "Visual Basic 6", "Pascal", "Logo"],
    discriminators: ["SELECT CASE", "CASE ELSE", "END SELECT", "QBASIC structured control flow"],
    explanation: "This is QBASIC. This snippet uses SELECT CASE, CASE ELSE, END SELECT as recognizable fingerprints.",
    code: `INPUT "PLAN"; plan$

SELECT CASE plan$
  CASE "pro"
    limit = 5000
  CASE ELSE
    limit = 250
END SELECT`
  },
  {
    id: "qbasic-type-record",
    language: "QBASIC",
    aliases: ["qbasic", "qbasic", "quickbasic"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["BASIC", "Visual Basic 6", "Pascal", "Logo"],
    discriminators: ["TYPE record", "END TYPE", "DIM variable AS type", "field access"],
    explanation: "This is QBASIC. This snippet uses TYPE record, END TYPE, DIM variable AS type as recognizable fingerprints.",
    code: `TYPE Invoice
  Id AS STRING
  Total AS DOUBLE
END TYPE

DIM item AS Invoice
item.Id = "A-42"
item.Total = 120.5`
  }
];

export default qbasic;
