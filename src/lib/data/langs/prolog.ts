import type { CodeQuestion } from '$lib/types';

const prolog: CodeQuestion[] = [
  {
    id: "prolog-recursive-rule",
    language: "Prolog",
    aliases: ["prolog", "pl"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "prolog",
    confusionGroup: ["Datalog", "Erlang", "Mercury", "Haskell"],
    discriminators: ["facts and rules", ":- operator", "recursive predicate", "capitalized variables"],
    explanation: "This is Prolog. Facts, rules with :- and capitalized logic variables are its core syntax fingerprints.",
    code: `parent(ada, grace).
parent(grace, linus).

ancestor(X, Y) :-
    parent(X, Y).
ancestor(X, Y) :-
    parent(X, Z),
    ancestor(Z, Y).`,
  }
];

export default prolog;
