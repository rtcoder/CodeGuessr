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
  },
  {
    id: "chapel-sync-var",
    language: "Chapel",
    aliases: ["chapel","chpl"],
    difficulty: "hard",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "chapel",
    confusionGroup: ["Fortran","Julia","X10","D"],
    discriminators: ["sync variable","begin statement","readFE/writeEF","parallel task coordination"],
    explanation: "This is Chapel. This snippet uses a distinct Chapel idiom: sync variable, begin statement, readFE/writeEF.",
    code: `var ready: sync bool;

begin {
  ready.writeEF(true);
}

if ready.readFE() {
  writeln("released");
}`,
  },
  {
    id: "chapel-record-iterator",
    language: "Chapel",
    aliases: ["chapel","chpl"],
    difficulty: "hard",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "chapel",
    confusionGroup: ["Fortran","Julia","X10","D"],
    discriminators: ["record declaration","iter method","yield keyword","for loop over custom iterator"],
    explanation: "This is Chapel. This snippet uses a distinct Chapel idiom: record declaration, iter method, yield keyword.",
    code: `record RangeBox {
  var low: int;
  var high: int;

  iter these() {
    for value in low..high do yield value;
  }
}

for n in new RangeBox(1, 3) do writeln(n);`,
  }
];

export default chapel;
