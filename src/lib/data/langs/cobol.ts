import type { CodeQuestion } from '$lib/types';

const cobol: CodeQuestion[] = [
  {
    id: "cobol-perform-varying",
    language: "COBOL",
    aliases: ["cobol"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "cobol",
    confusionGroup: ["Fortran", "Ada", "PL/I", "BASIC"],
    discriminators: ["IDENTIFICATION DIVISION", "PERFORM VARYING", "DISPLAY", "PIC clauses"],
    explanation: "This is COBOL. IDENTIFICATION DIVISION, PIC clauses, DISPLAY, and PERFORM VARYING are classic COBOL markers.",
    code: `IDENTIFICATION DIVISION.
PROGRAM-ID. ACTIVE-USERS.
DATA DIVISION.
WORKING-STORAGE SECTION.
01 IDX PIC 9(03) VALUE 1.

PROCEDURE DIVISION.
    PERFORM VARYING IDX FROM 1 BY 1 UNTIL IDX > 10
        DISPLAY "CHECKING USER " IDX
    END-PERFORM
    STOP RUN.`,
  }
];

export default cobol;
