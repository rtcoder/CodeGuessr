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
  },
  {
    id: "cobol-evaluate",
    language: "COBOL",
    aliases: ["cobol"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "cobol",
    confusionGroup: ["Fortran","Ada","PL/I","BASIC"],
    discriminators: ["EVALUATE statement","WHEN branches","WORKING-STORAGE SECTION","PIC clauses"],
    explanation: "This is COBOL. This snippet uses a distinct COBOL idiom: EVALUATE statement, WHEN branches, WORKING-STORAGE SECTION.",
    code: `IDENTIFICATION DIVISION.
PROGRAM-ID. STATUS-DEMO.
DATA DIVISION.
WORKING-STORAGE SECTION.
01 STATUS-CODE PIC 9 VALUE 2.
PROCEDURE DIVISION.
    EVALUATE STATUS-CODE
        WHEN 1 DISPLAY "NEW"
        WHEN 2 DISPLAY "PAID"
        WHEN OTHER DISPLAY "UNKNOWN"
    END-EVALUATE.`,
  },
  {
    id: "cobol-file-section",
    language: "COBOL",
    aliases: ["cobol"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "cobol",
    confusionGroup: ["Fortran","Ada","PL/I","BASIC"],
    discriminators: ["FILE SECTION","FD record declaration","OPEN INPUT","READ ... AT END"],
    explanation: "This is COBOL. This snippet uses a distinct COBOL idiom: FILE SECTION, FD record declaration, OPEN INPUT.",
    code: `ENVIRONMENT DIVISION.
INPUT-OUTPUT SECTION.
FILE-CONTROL.
    SELECT CUSTOMER-FILE ASSIGN TO "customers.dat".
DATA DIVISION.
FILE SECTION.
FD CUSTOMER-FILE.
01 CUSTOMER-REC PIC X(80).
PROCEDURE DIVISION.
    OPEN INPUT CUSTOMER-FILE
    READ CUSTOMER-FILE AT END DISPLAY "DONE".`,
  }
];

export default cobol;
