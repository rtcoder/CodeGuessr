import type { CodeQuestion } from '$lib/types';

const dbase: CodeQuestion[] = [
  {
    id: "dbase-use-replace",
    language: "dBase",
    aliases: ["dbase", "dbase", "dBASE"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["FoxPro", "Clipper", "Harbour", "BASIC"],
    discriminators: ["USE command", "REPLACE field WITH", "LOCATE FOR", "? output command"],
    explanation: "This is dBase. This snippet uses USE command, REPLACE field WITH, LOCATE FOR as recognizable fingerprints.",
    code: `USE customers
LOCATE FOR status = "ACTIVE"
IF FOUND()
  REPLACE last_seen WITH DATE()
  ? name
ENDIF`
  },
  {
    id: "dbase-do-while-skip",
    language: "dBase",
    aliases: ["dbase", "dbase", "dBASE"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["FoxPro", "Clipper", "Harbour", "BASIC"],
    discriminators: ["DO WHILE .NOT. EOF()", "SKIP command", "field access by bare name", "ENDDO terminator"],
    explanation: "This is dBase. This snippet uses DO WHILE .NOT. EOF(), SKIP command, field access by bare name as recognizable fingerprints.",
    code: `USE invoices
DO WHILE .NOT. EOF()
  IF total > 1000
    ? id, total
  ENDIF
  SKIP
ENDDO`
  },
  {
    id: "dbase-procedure",
    language: "dBase",
    aliases: ["dbase", "dbase", "dBASE"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["FoxPro", "Clipper", "Harbour", "BASIC"],
    discriminators: ["PROCEDURE block", "PARAMETERS command", "RETURN expression", "macro-era xBase syntax"],
    explanation: "This is dBase. This snippet uses PROCEDURE block, PARAMETERS command, RETURN expression as recognizable fingerprints.",
    code: `PROCEDURE Discount
PARAMETERS nTotal
IF nTotal > 1000
  RETURN nTotal * .9
ENDIF
RETURN nTotal`
  }
];

export default dbase;
