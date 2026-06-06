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
  },
  {
    id: "prolog-dcg",
    language: "Prolog",
    aliases: ["prolog","pl"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "prolog",
    confusionGroup: ["Datalog","Erlang","Mercury","Haskell"],
    discriminators: ["DCG rule -->","phrase predicate","terminal list syntax","grammar nonterminal"],
    explanation: "This is Prolog. This snippet uses a distinct Prolog idiom: DCG rule -->, phrase predicate, terminal list syntax.",
    code: `sentence --> noun_phrase, verb_phrase.
noun_phrase --> [the], [user].
verb_phrase --> [logged], [in].

valid(Tokens) :- phrase(sentence, Tokens).`,
  },
  {
    id: "prolog-cut-negation",
    language: "Prolog",
    aliases: ["prolog","pl"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "prolog",
    confusionGroup: ["Datalog","Erlang","Mercury","Haskell"],
    discriminators: ["cut operator !","negation as failure","multiple predicate clauses","anonymous variable"],
    explanation: "This is Prolog. This snippet uses a distinct Prolog idiom: cut operator !, negation as failure, multiple predicate clauses.",
    code: `member_once(X, [X|_]) :- !.
member_once(X, [_|Tail]) :- member_once(X, Tail).

missing(X, List) :- \+ member_once(X, List).`,
  }
];

export default prolog;
