import type { Question } from './types';

export const questions: Question[] = [
  {
    id: 'csharp-linq-active-users',
    language: 'C#',
    grammar: 'csharp',
    difficulty: 'normal',
    confusionGroup: ['Java', 'Kotlin', 'TypeScript', 'F#'],
    discriminators: ['using System.Linq', 'LINQ extension methods', 'Console.WriteLine'],
    snippet: `using System;
using System.Linq;

var activeNames = users
    .Where(user => user.IsActive)
    .Select(user => user.Name)
    .ToList();

Console.WriteLine(string.Join(", ", activeNames));`
  },
  {
    id: 'rust-match-option',
    language: 'Rust',
    grammar: 'rust',
    difficulty: 'normal',
    confusionGroup: ['Go', 'Swift', 'C++', 'Haskell'],
    discriminators: ['Option<T>', 'match', 'Some/None variants', 'println! macro'],
    snippet: `fn describe_port(port: Option<u16>) -> String {
    match port {
        Some(443) => "secure".to_string(),
        Some(value) => format!("custom:{value}"),
        None => "missing".to_string(),
    }
}

println!("{}", describe_port(Some(8080)));`
  },
  {
    id: 'go-context-defer',
    language: 'Go',
    grammar: 'go',
    difficulty: 'normal',
    confusionGroup: ['Rust', 'Java', 'C', 'Kotlin'],
    discriminators: ['package main', 'context.WithTimeout', 'defer cancel()', 'select over channel cases'],
    snippet: `package main

import (
    "context"
    "time"
)

func fetchWithTimeout(done <-chan string) string {
    ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
    defer cancel()

    select {
    case value := <-done:
        return value
    case <-ctx.Done():
        return "timeout"
    }
}`
  },
  {
    id: 'kotlin-sealed-when',
    language: 'Kotlin',
    grammar: 'kotlin',
    difficulty: 'normal',
    confusionGroup: ['Java', 'Scala', 'Swift', 'C#'],
    discriminators: ['sealed interface', 'data class', 'when expression', 'is type checks'],
    snippet: `sealed interface PaymentEvent
data class Captured(val cents: Int) : PaymentEvent
object Failed : PaymentEvent

fun label(event: PaymentEvent): String =
    when (event) {
        is Captured -> "captured: \${event.cents}"
        Failed -> "failed"
    }`
  },
  {
    id: 'swift-guard-enum',
    language: 'Swift',
    grammar: 'swift',
    difficulty: 'normal',
    confusionGroup: ['Kotlin', 'Rust', 'Objective-C', 'TypeScript'],
    discriminators: ['guard let', 'enum cases with associated values', 'switch with case let'],
    snippet: `enum Route {
    case user(id: Int)
    case search(term: String)
}

func render(_ route: Route?) -> String {
    guard let route else { return "missing" }

    switch route {
    case let .user(id):
        return "user/\\(id)"
    case let .search(term):
        return "search?q=\\(term)"
    }
}`
  },
  {
    id: 'ruby-block-symbol-to-proc',
    language: 'Ruby',
    grammar: 'ruby',
    difficulty: 'easy',
    confusionGroup: ['Python', 'Perl', 'Crystal', 'Elixir'],
    discriminators: ['symbol keys', 'select block', '&:name symbol-to-proc', 'puts'],
    snippet: `active_names = users
  .select { |user| user[:active] }
  .map(&:name)
  .uniq

puts active_names.join(", ")`
  },
  {
    id: 'python-dataclass-match',
    language: 'Python',
    grammar: 'python',
    difficulty: 'easy',
    confusionGroup: ['Ruby', 'Julia', 'JavaScript', 'Lua'],
    discriminators: ['dataclass decorator', 'match/case', 'f-string'],
    snippet: `from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int

def describe(point: Point) -> str:
    match point:
        case Point(x=0, y=0):
            return "origin"
        case Point(x=x, y=y):
            return f"{x},{y}"`
  },
  {
    id: 'typescript-satisfies-record',
    language: 'TypeScript',
    grammar: 'typescript',
    difficulty: 'normal',
    confusionGroup: ['JavaScript', 'Kotlin', 'C#', 'Flow'],
    discriminators: ['type alias', 'Record generic', 'satisfies operator', 'optional chaining'],
    snippet: `type Role = "admin" | "viewer";

const permissions = {
  admin: ["deploy", "invite"],
  viewer: ["read"]
} satisfies Record<Role, string[]>;

export function can(role: Role, action: string) {
  return permissions[role]?.includes(action) ?? false;
}`
  },
  {
    id: 'elixir-pipe-pattern',
    language: 'Elixir',
    grammar: 'elixir',
    difficulty: 'hard',
    confusionGroup: ['Erlang', 'Ruby', 'Clojure', 'F#'],
    discriminators: ['defmodule', 'pipe operator', 'pattern-matched function heads', 'Enum module'],
    snippet: `defmodule AuditTrail do
  def summarize(events) do
    events
    |> Enum.filter(&match?({:ok, _}, &1))
    |> Enum.map(fn {:ok, event} -> event.actor end)
    |> Enum.frequencies()
  end
end`
  },
  {
    id: 'haskell-guards-maybe',
    language: 'Haskell',
    grammar: 'haskell',
    difficulty: 'hard',
    confusionGroup: ['F#', 'OCaml', 'PureScript', 'Elm'],
    discriminators: ['type signature', 'Maybe', 'guards', 'pattern matching'],
    snippet: `scoreLabel :: Maybe Int -> String
scoreLabel Nothing = "missing"
scoreLabel (Just score)
  | score >= 90 = "excellent"
  | score >= 70 = "steady"
  | otherwise = "needs practice"`
  },
  {
    id: 'php-match-nullsafe',
    language: 'PHP',
    grammar: 'php',
    difficulty: 'easy',
    confusionGroup: ['JavaScript', 'Hack', 'Perl', 'Ruby'],
    discriminators: ['<?php tag', 'nullsafe operator', 'match expression', 'array arrow syntax'],
    snippet: `<?php

$tier = match ($user?->plan()) {
    "pro" => ["limit" => 5000],
    "team" => ["limit" => 20000],
    default => ["limit" => 250],
};

echo $tier["limit"];`
  },
  {
    id: 'scala-case-class-fold',
    language: 'Scala',
    grammar: 'scala',
    difficulty: 'hard',
    confusionGroup: ['Kotlin', 'Haskell', 'F#', 'Java'],
    discriminators: ['case class', 'Option.fold', 'for comprehension', 'yield'],
    snippet: `case class User(id: Long, email: Option[String])

val domains =
  for
    user <- users
    email <- user.email
  yield email.split("@").last

println(domains.groupBy(identity).view.mapValues(_.size))`
  },
  {
    id: 'cobol-perform-varying',
    language: 'COBOL',
    grammar: 'cobol',
    difficulty: 'insane',
    confusionGroup: ['Fortran', 'Ada', 'PL/I', 'BASIC'],
    discriminators: ['IDENTIFICATION DIVISION', 'PERFORM VARYING', 'DISPLAY', 'PIC clauses'],
    snippet: `IDENTIFICATION DIVISION.
PROGRAM-ID. ACTIVE-USERS.
DATA DIVISION.
WORKING-STORAGE SECTION.
01 IDX PIC 9(03) VALUE 1.

PROCEDURE DIVISION.
    PERFORM VARYING IDX FROM 1 BY 1 UNTIL IDX > 10
        DISPLAY "CHECKING USER " IDX
    END-PERFORM
    STOP RUN.`
  },
  {
    id: 'prolog-recursive-rule',
    language: 'Prolog',
    grammar: 'prolog',
    difficulty: 'insane',
    confusionGroup: ['Datalog', 'Erlang', 'Mercury', 'Haskell'],
    discriminators: ['facts and rules', ':- operator', 'recursive predicate', 'capitalized variables'],
    snippet: `parent(ada, grace).
parent(grace, linus).

ancestor(X, Y) :-
    parent(X, Y).
ancestor(X, Y) :-
    parent(X, Z),
    ancestor(Z, Y).`
  },
  {
    id: 'forth-stack-words',
    language: 'Forth',
    grammar: 'forth',
    difficulty: 'insane',
    confusionGroup: ['PostScript', 'Factor', 'Joy', 'Assembly'],
    discriminators: ['colon word definition', 'stack operators', 'postfix arithmetic', '. output word'],
    snippet: `: square dup * ;
: hypotenuse-squared
  square swap square + ;

3 4 hypotenuse-squared .`
  },
  {
    id: 'tla-plus-action',
    language: 'TLA+',
    grammar: 'tla',
    difficulty: 'insane',
    confusionGroup: ['Alloy', 'Coq/Rocq', 'Lean', 'Z notation'],
    discriminators: ['MODULE header', 'VARIABLES', '/\\ conjunction', "primed variable state updates"],
    snippet: `---- MODULE Counter ----
VARIABLES count

Init == count = 0

Next ==
  \\/ count < 10 /\\ count' = count + 1
  \\/ count = 10 /\\ count' = count

Spec == Init /\\ [][Next]_count
====`
  }
];
