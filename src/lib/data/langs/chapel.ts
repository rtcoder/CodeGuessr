import type { CodeQuestion } from '$lib/types';

const chapel: CodeQuestion[] = [
  {
    id: "chapel-forall-domain",
    language: "Chapel",
    aliases: ["chapel", "chpl"],
    difficulty: "hard",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "chapel",
    confusionGroup: ["Fortran", "Julia", "X10", "D"],
    discriminators: ["config const", "domain declaration", "forall parallel loop", "writeln"],
    explanation: "This is Chapel. config const, domain/range syntax, forall loops, and writeln are Chapel fingerprints.",
    code: `config const n = 8;
const Users = {1..n};
var active: [Users] bool;

forall idx in Users {
  if active[idx] {
    writeln("active user ", idx);
  }
}`,
  }
];

export default chapel;
