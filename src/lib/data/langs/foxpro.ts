import type { CodeQuestion } from '$lib/types';

const foxpro: CodeQuestion[] = [
  {
    id: "foxpro-scan-replace",
    language: "FoxPro",
    aliases: ["foxpro", "foxpro", "visual foxpro"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["dBase", "Clipper", "Harbour", "BASIC"],
    discriminators: ["SCAN loop", "REPLACE command", "alias.field access", "ENDSCAN terminator"],
    explanation: "This is FoxPro. This snippet uses SCAN loop, REPLACE command, alias.field access as recognizable fingerprints.",
    code: `SELECT customers
SCAN FOR active = .T.
  REPLACE last_seen WITH DATE()
  ? customers.name
ENDSCAN`
  },
  {
    id: "foxpro-cursor-sql",
    language: "FoxPro",
    aliases: ["foxpro", "foxpro", "visual foxpro"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["dBase", "Clipper", "Harbour", "BASIC"],
    discriminators: ["SELECT ... INTO CURSOR", "FoxPro logical .T.", "IIF function", "semicolon continuation"],
    explanation: "This is FoxPro. This snippet uses SELECT ... INTO CURSOR, FoxPro logical .T., IIF function as recognizable fingerprints.",
    code: `SELECT id, IIF(active = .T., "yes", "no") AS status ;
  FROM users ;
  WHERE deleted = .F. ;
  INTO CURSOR active_users`
  },
  {
    id: "foxpro-procedure-parameters",
    language: "FoxPro",
    aliases: ["foxpro", "foxpro", "visual foxpro"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["dBase", "Clipper", "Harbour", "BASIC"],
    discriminators: ["PROCEDURE declaration", "LPARAMETERS", "RETURN statement", "FoxPro string functions"],
    explanation: "This is FoxPro. This snippet uses PROCEDURE declaration, LPARAMETERS, RETURN statement as recognizable fingerprints.",
    code: `PROCEDURE Slug
  LPARAMETERS tcName
  RETURN LOWER(STRTRAN(tcName, " ", "-"))
ENDPROC`
  }
];

export default foxpro;
