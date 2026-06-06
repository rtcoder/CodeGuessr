import type { CodeQuestion } from '$lib/types';

const jcl: CodeQuestion[] = [
  {
    id: "jcl-job-exec-dd",
    language: "JCL",
    aliases: ["jcl", "jcl", "job control language"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["COBOL", "RPG", "REXX", "Assembly"],
    discriminators: ["// JOB card", "EXEC PGM", "DD statement", "dataset disposition"],
    explanation: "This is JCL. This snippet uses // JOB card, EXEC PGM, DD statement as recognizable fingerprints.",
    code: `//BILLING  JOB (ACCT),'DAILY BILLING',CLASS=A,MSGCLASS=X
//STEP01   EXEC PGM=IEFBR14
//OUTFILE  DD DSN=APP.BILLING.DAILY,
//            DISP=(NEW,CATLG,DELETE),SPACE=(CYL,(1,1))`
  },
  {
    id: "jcl-proc-symbolic",
    language: "JCL",
    aliases: ["jcl", "jcl", "job control language"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["COBOL", "RPG", "REXX", "Assembly"],
    discriminators: ["PROC definition", "symbolic parameter &NAME", "PEND terminator", "JCL procedure syntax"],
    explanation: "This is JCL. This snippet uses PROC definition, symbolic parameter &NAME, PEND terminator as recognizable fingerprints.",
    code: `//COPYPROC PROC FROM=,TO=
//COPYSTEP EXEC PGM=IEBGENER
//SYSUT1   DD DSN=&FROM,DISP=SHR
//SYSUT2   DD DSN=&TO,DISP=OLD
//SYSPRINT DD SYSOUT=*
//SYSIN    DD DUMMY
//         PEND`
  },
  {
    id: "jcl-cond-step",
    language: "JCL",
    aliases: ["jcl", "jcl", "job control language"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["COBOL", "RPG", "REXX", "Assembly"],
    discriminators: ["COND parameter", "SYSOUT=*", "DD * inline data", "mainframe control cards"],
    explanation: "This is JCL. This snippet uses COND parameter, SYSOUT=*, DD * inline data as recognizable fingerprints.",
    code: `//REPORT   JOB (ACCT),'REPORT'
//BUILD    EXEC PGM=REPORTER
//SYSPRINT DD SYSOUT=*
//FILTER   DD *
STATUS=PAID
/*`
  }
];

export default jcl;
