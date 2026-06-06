import type { CodeQuestion } from '$lib/types';

const rpg: CodeQuestion[] = [
  {
    id: "rpg-free-dcl-s",
    language: "RPG",
    aliases: ["rpg", "rpg", "ibm rpg"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["COBOL", "JCL", "PL/I", "Fortran"],
    discriminators: ["dcl-s declaration", "chain operation", "if/endIf", "IBM i RPG free-form"],
    explanation: "This is RPG. This snippet uses dcl-s declaration, chain operation, if/endIf as recognizable fingerprints.",
    code: `dcl-s customerId packed(9:0);
dcl-s customerName varchar(80);

chain customerId CustomerFile;
if %found(CustomerFile);
  customerName = Name;
endif;`
  },
  {
    id: "rpg-procedure",
    language: "RPG",
    aliases: ["rpg", "rpg", "ibm rpg"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["COBOL", "JCL", "PL/I", "Fortran"],
    discriminators: ["dcl-proc/dcl-pi", "return opcode", "packed decimal type", "end-proc"],
    explanation: "This is RPG. This snippet uses dcl-proc/dcl-pi, return opcode, packed decimal type as recognizable fingerprints.",
    code: `dcl-proc Discount;
  dcl-pi *n packed(7:2);
    total packed(7:2) const;
  end-pi;

  return total * 0.90;
end-proc;`
  },
  {
    id: "rpg-monitor",
    language: "RPG",
    aliases: ["rpg", "rpg", "ibm rpg"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["COBOL", "JCL", "PL/I", "Fortran"],
    discriminators: ["monitor/on-error", "%status builtin", "dou loop", "RPG built-ins"],
    explanation: "This is RPG. This snippet uses monitor/on-error, %status builtin, dou loop as recognizable fingerprints.",
    code: `monitor;
  read Orders;
  dou %eof(Orders);
    dsply OrderId;
    read Orders;
  enddo;
on-error;
  dsply %char(%status);
endmon;`
  }
];

export default rpg;
