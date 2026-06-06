import type { CodeQuestion } from '$lib/types';

const mumpsM: CodeQuestion[] = [
  {
    id: "mumps-set-quit",
    language: "MUMPS/M",
    aliases: ["mumps/m", "mumps", "m"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["BASIC", "COBOL", "REXX", "Perl"],
    discriminators: ["SET command abbreviation", "global variable ^name", "QUIT command", "line labels"],
    explanation: "This is MUMPS/M. This snippet uses SET command abbreviation, global variable ^name, QUIT command as recognizable fingerprints.",
    code: `TOTAL ;
 S SUM=0
 F I=1:1:10 S SUM=SUM+^ORDERS(I,"TOTAL")
 Q SUM`
  },
  {
    id: "mumps-do-label",
    language: "MUMPS/M",
    aliases: ["mumps/m", "mumps", "m"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["BASIC", "COBOL", "REXX", "Perl"],
    discriminators: ["DO label call", "WRITE command", "postcondition syntax", "$PIECE intrinsic"],
    explanation: "This is MUMPS/M. This snippet uses DO label call, WRITE command, postcondition syntax as recognizable fingerprints.",
    code: `PRINT(ID) ;
 I '$D(^PATIENT(ID)) W "missing" Q
 W $P(^PATIENT(ID),U,1),!
 Q`
  },
  {
    id: "mumps-new-scope",
    language: "MUMPS/M",
    aliases: ["mumps/m", "mumps", "m"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["BASIC", "COBOL", "REXX", "Perl"],
    discriminators: ["NEW command", "$ORDER loop", "global traversal", "MUMPS terse commands"],
    explanation: "This is MUMPS/M. This snippet uses NEW command, $ORDER loop, global traversal as recognizable fingerprints.",
    code: `LIST ;
 N ID
 S ID=0
 F  S ID=$O(^TASK(ID)) Q:'ID  W ID,":",^TASK(ID),!
 Q`
  }
];

export default mumpsM;
