import type { CodeQuestion } from '../types';

export const questions: CodeQuestion[] = [
  {
    id: 'csharp-linq-active-users',
    language: 'C#',
    aliases: ['c#', 'csharp', 'cs', 'c-sharp'],
    difficulty: 'medium',
    category: 'popular',
    quizSuitability: 'excellent',
    highlightLanguage: 'csharp',
    confusionGroup: ['Java', 'Kotlin', 'TypeScript', 'F#'],
    discriminators: ['using System.Linq', 'LINQ extension methods', 'Console.WriteLine'],
    explanation:
      'This is C#. LINQ extension methods, using System.Linq, and Console.WriteLine distinguish it from Java, Kotlin, and TypeScript.',
    code: `using System;
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
    aliases: ['rust', 'rs'],
    difficulty: 'medium',
    category: 'systems',
    quizSuitability: 'excellent',
    highlightLanguage: 'rust',
    confusionGroup: ['Go', 'Swift', 'C++', 'Haskell'],
    discriminators: ['Option<T>', 'match', 'Some/None variants', 'println! macro'],
    explanation:
      'This is Rust. Option, Some/None variants, match arms, format!, and println! are strong Rust fingerprints.',
    code: `fn describe_port(port: Option<u16>) -> String {
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
    aliases: ['go', 'golang'],
    difficulty: 'medium',
    category: 'systems',
    quizSuitability: 'excellent',
    highlightLanguage: 'go',
    confusionGroup: ['Rust', 'Java', 'C', 'Kotlin'],
    discriminators: ['package main', 'context.WithTimeout', 'defer cancel()', 'select over channel cases'],
    explanation:
      'This is Go. package declarations, func syntax, defer, channels, and select cases are Go-specific fingerprints.',
    code: `package main

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
    aliases: ['kotlin', 'kt'],
    difficulty: 'medium',
    category: 'popular',
    quizSuitability: 'excellent',
    highlightLanguage: 'kotlin',
    confusionGroup: ['Java', 'Scala', 'Swift', 'C#'],
    discriminators: ['sealed interface', 'data class', 'when expression', 'is type checks'],
    explanation:
      'This is Kotlin. sealed interface, data class, object singleton, and exhaustive when are strong Kotlin clues.',
    code: `sealed interface PaymentEvent
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
    aliases: ['swift'],
    difficulty: 'medium',
    category: 'popular',
    quizSuitability: 'excellent',
    highlightLanguage: 'swift',
    confusionGroup: ['Kotlin', 'Rust', 'Objective-C', 'TypeScript'],
    discriminators: ['guard let', 'enum cases with associated values', 'switch with case let'],
    explanation:
      'This is Swift. guard let, enum cases with associated values, switch pattern matching, and string interpolation with backslash parentheses identify it.',
    code: `enum Route {
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
    aliases: ['ruby', 'rb'],
    difficulty: 'easy',
    category: 'scripting',
    quizSuitability: 'excellent',
    highlightLanguage: 'ruby',
    confusionGroup: ['Python', 'Perl', 'Crystal', 'Elixir'],
    discriminators: ['symbol keys', 'select block', '&:name symbol-to-proc', 'puts'],
    explanation:
      'This is Ruby. Block parameters between pipes, symbols like :active, &:name, and puts are Ruby fingerprints.',
    code: `active_names = users
  .select { |user| user[:active] }
  .map(&:name)
  .uniq

puts active_names.join(", ")`
  },
  {
    id: 'python-dataclass-match',
    language: 'Python',
    aliases: ['python', 'py', 'python3'],
    difficulty: 'easy',
    category: 'popular',
    quizSuitability: 'excellent',
    highlightLanguage: 'python',
    confusionGroup: ['Ruby', 'Julia', 'JavaScript', 'Lua'],
    discriminators: ['dataclass decorator', 'match/case', 'f-string'],
    explanation:
      'This is Python. The dataclass decorator, indentation, match/case syntax, and f-string point to modern Python.',
    code: `from dataclasses import dataclass

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
    aliases: ['typescript', 'ts'],
    difficulty: 'medium',
    category: 'web',
    quizSuitability: 'excellent',
    highlightLanguage: 'typescript',
    confusionGroup: ['JavaScript', 'Kotlin', 'C#', 'Flow'],
    discriminators: ['type alias', 'Record generic', 'satisfies operator', 'optional chaining'],
    explanation:
      'This is TypeScript. A string-literal union type, Record<Role, string[]>, and the satisfies operator separate it from plain JavaScript.',
    code: `type Role = "admin" | "viewer";

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
    aliases: ['elixir', 'ex'],
    difficulty: 'hard',
    category: 'functional',
    quizSuitability: 'excellent',
    highlightLanguage: 'elixir',
    confusionGroup: ['Erlang', 'Ruby', 'Clojure', 'F#'],
    discriminators: ['defmodule', 'pipe operator', 'pattern-matched function heads', 'Enum module'],
    explanation:
      'This is Elixir. defmodule, the pipe operator, atom tuples, match?, and Enum pipelines are characteristic Elixir features.',
    code: `defmodule AuditTrail do
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
    aliases: ['haskell', 'hs'],
    difficulty: 'hard',
    category: 'functional',
    quizSuitability: 'excellent',
    highlightLanguage: 'haskell',
    confusionGroup: ['F#', 'OCaml', 'PureScript', 'Elm'],
    discriminators: ['type signature', 'Maybe', 'guards', 'pattern matching'],
    explanation:
      'This is Haskell. The :: type signature, Maybe/Just/Nothing, pattern-matched equations, and guards identify it.',
    code: `scoreLabel :: Maybe Int -> String
scoreLabel Nothing = "missing"
scoreLabel (Just score)
  | score >= 90 = "excellent"
  | score >= 70 = "steady"
  | otherwise = "needs practice"`
  },
  {
    id: 'php-match-nullsafe',
    language: 'PHP',
    aliases: ['php'],
    difficulty: 'easy',
    category: 'web',
    quizSuitability: 'excellent',
    highlightLanguage: 'php',
    confusionGroup: ['JavaScript', 'Hack', 'Perl', 'Ruby'],
    discriminators: ['<?php tag', 'nullsafe operator', 'match expression', 'array arrow syntax'],
    explanation:
      'This is PHP. The <?php opening tag, $ variables, nullsafe operator, match expression, and array arrow syntax are PHP clues.',
    code: `<?php

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
    aliases: ['scala'],
    difficulty: 'hard',
    category: 'functional',
    quizSuitability: 'excellent',
    highlightLanguage: 'scala',
    confusionGroup: ['Kotlin', 'Haskell', 'F#', 'Java'],
    discriminators: ['case class', 'Option.fold', 'for comprehension', 'yield'],
    explanation:
      'This is Scala. case class, Option-style values, for comprehensions, yield, and collection chaining distinguish it from Java and Kotlin.',
    code: `case class User(id: Long, email: Option[String])

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
    aliases: ['cobol'],
    difficulty: 'insane',
    category: 'legacy',
    quizSuitability: 'excellent',
    highlightLanguage: 'cobol',
    confusionGroup: ['Fortran', 'Ada', 'PL/I', 'BASIC'],
    discriminators: ['IDENTIFICATION DIVISION', 'PERFORM VARYING', 'DISPLAY', 'PIC clauses'],
    explanation:
      'This is COBOL. IDENTIFICATION DIVISION, PIC clauses, DISPLAY, and PERFORM VARYING are classic COBOL markers.',
    code: `IDENTIFICATION DIVISION.
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
    aliases: ['prolog', 'pl'],
    difficulty: 'insane',
    category: 'academic',
    quizSuitability: 'excellent',
    highlightLanguage: 'prolog',
    confusionGroup: ['Datalog', 'Erlang', 'Mercury', 'Haskell'],
    discriminators: ['facts and rules', ':- operator', 'recursive predicate', 'capitalized variables'],
    explanation:
      'This is Prolog. Facts, rules with :- and capitalized logic variables are its core syntax fingerprints.',
    code: `parent(ada, grace).
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
    aliases: ['forth'],
    difficulty: 'insane',
    category: 'esoteric',
    quizSuitability: 'excellent',
    highlightLanguage: 'forth',
    confusionGroup: ['PostScript', 'Factor', 'Joy', 'Assembly'],
    discriminators: ['colon word definition', 'stack operators', 'postfix arithmetic', '. output word'],
    explanation:
      'This is Forth. Colon definitions, stack words like dup and swap, postfix arithmetic, and dot output are Forth fingerprints.',
    code: `: square dup * ;
: hypotenuse-squared
  square swap square + ;

3 4 hypotenuse-squared .`
  },
  {
    id: 'tla-plus-action',
    language: 'TLA+',
    aliases: ['tla+', 'tla', 'tlaplus'],
    difficulty: 'insane',
    category: 'academic',
    quizSuitability: 'excellent',
    highlightLanguage: 'tla',
    confusionGroup: ['Alloy', 'Coq/Rocq', 'Lean', 'Z notation'],
    discriminators: ['MODULE header', 'VARIABLES', '/\\ conjunction', "primed variable state updates"],
    explanation:
      "This is TLA+. MODULE headers, VARIABLES, temporal-spec operators, and primed next-state variables are TLA+ fingerprints.",
    code: `---- MODULE Counter ----
VARIABLES count

Init == count = 0

Next ==
  \\/ count < 10 /\\ count' = count + 1
  \\/ count = 10 /\\ count' = count

Spec == Init /\\ [][Next]_count
====`
  },
  {
    id: 'csharp-async-nullable-record',
    language: 'C#',
    aliases: ['c#', 'csharp', 'cs', 'c-sharp'],
    difficulty: 'medium',
    category: 'popular',
    quizSuitability: 'excellent',
    highlightLanguage: 'csharp',
    confusionGroup: ['Java', 'Kotlin', 'TypeScript', 'F#'],
    discriminators: ['record declaration', 'async Task<T>', 'nullable reference type', 'await using'],
    explanation:
      'This is C#. record syntax, async Task<T>, nullable reference types, and await using are modern C# fingerprints.',
    code: `public sealed record UserDto(Guid Id, string? Email);

public async Task<UserDto?> LoadUserAsync(Guid id)
{
    await using var db = await factory.CreateDbContextAsync();
    return await db.Users
        .Where(user => user.Id == id)
        .Select(user => new UserDto(user.Id, user.Email))
        .SingleOrDefaultAsync();
}`
  },
  {
    id: 'rust-result-question-mark',
    language: 'Rust',
    aliases: ['rust', 'rs'],
    difficulty: 'medium',
    category: 'systems',
    quizSuitability: 'excellent',
    highlightLanguage: 'rust',
    confusionGroup: ['Go', 'C++', 'Zig', 'Swift'],
    discriminators: ['use std::fs', 'Result<T, E>', '? error propagation', 'serde_json::from_str'],
    explanation:
      'This is Rust. Result return types, borrowed &str parameters, the ? operator, and crate-style paths like serde_json::from_str identify it.',
    code: `use std::fs;

fn load_config(path: &str) -> Result<Config, Box<dyn std::error::Error>> {
    let contents = fs::read_to_string(path)?;
    let config = serde_json::from_str::<Config>(&contents)?;
    Ok(config)
}`
  },
  {
    id: 'go-error-handling-defer',
    language: 'Go',
    aliases: ['go', 'golang'],
    difficulty: 'medium',
    category: 'systems',
    quizSuitability: 'excellent',
    highlightLanguage: 'go',
    confusionGroup: ['Rust', 'C', 'Zig', 'Java'],
    discriminators: ['func declaration', 'multiple return values', 'err != nil', 'defer file.Close()', ':= short declaration'],
    explanation:
      'This is Go. Multiple return values, explicit err != nil checks, defer, and := short declarations are classic Go fingerprints.',
    code: `func readConfig(path string) ([]byte, error) {
    file, err := os.Open(path)
    if err != nil {
        return nil, err
    }
    defer file.Close()

    return io.ReadAll(file)
}`
  },
  {
    id: 'kotlin-coroutine-flow',
    language: 'Kotlin',
    aliases: ['kotlin', 'kt'],
    difficulty: 'medium',
    category: 'popular',
    quizSuitability: 'excellent',
    highlightLanguage: 'kotlin',
    confusionGroup: ['Java', 'Scala', 'Swift', 'C#'],
    discriminators: ['suspend function', 'Flow<T>', 'emit', 'when expression', 'string interpolation'],
    explanation:
      'This is Kotlin. suspend functions, Flow, emit, when expressions, and $ interpolation separate it from Java and Scala.',
    code: `suspend fun streamLabels(events: Flow<Event>): Flow<String> = flow {
    events.collect { event ->
        val label = when (event) {
            is Event.Created -> "created:\${event.id}"
            is Event.Deleted -> "deleted:\${event.id}"
        }
        emit(label)
    }
}`
  },
  {
    id: 'swift-property-wrapper-task',
    language: 'Swift',
    aliases: ['swift'],
    difficulty: 'medium',
    category: 'popular',
    quizSuitability: 'excellent',
    highlightLanguage: 'swift',
    confusionGroup: ['Kotlin', 'Rust', 'Objective-C', 'Dart'],
    discriminators: ['@MainActor attribute', '@Published property wrapper', 'async/await', 'Task closure'],
    explanation:
      'This is Swift. @MainActor, @Published, Task, async/await, and backslash-parentheses interpolation are Swift fingerprints.',
    code: `@MainActor
final class ProfileViewModel: ObservableObject {
    @Published private(set) var title = "Loading"

    func refresh() {
        Task {
            let user = try await service.currentUser()
            title = "\\(user.name) · \\(user.plan)"
        }
    }
}`
  },
  {
    id: 'ruby-pattern-match-case-in',
    language: 'Ruby',
    aliases: ['ruby', 'rb'],
    difficulty: 'medium',
    category: 'scripting',
    quizSuitability: 'excellent',
    highlightLanguage: 'ruby',
    confusionGroup: ['Python', 'Elixir', 'Crystal', 'Perl'],
    discriminators: ['case/in pattern matching', 'hash symbols', 'then expression', 'nil fallback'],
    explanation:
      'This is Ruby. The case/in pattern matching syntax, symbol keys, then branches, and nil fallback point to modern Ruby.',
    code: `def label(event)
  case event
  in { type: :created, user: { name: } }
    "created by #{name}"
  in { type: :deleted, id: }
    "deleted #{id}"
  else
    nil
  end
end`
  },
  {
    id: 'python-pathlib-comprehension',
    language: 'Python',
    aliases: ['python', 'py', 'python3'],
    difficulty: 'easy',
    category: 'popular',
    quizSuitability: 'excellent',
    highlightLanguage: 'python',
    confusionGroup: ['Ruby', 'Julia', 'Nim', 'Lua'],
    discriminators: ['from pathlib import Path', 'list comprehension', 'with context manager', 'indentation-based block'],
    explanation:
      'This is Python. pathlib imports, list comprehensions, with blocks, and indentation-based structure identify it clearly.',
    code: `from pathlib import Path

def read_titles(folder: Path) -> list[str]:
    files = [
        path
        for path in folder.glob("*.md")
        if path.is_file()
    ]

    with files[0].open(encoding="utf-8") as handle:
        return [line.strip("# \\n") for line in handle if line.startswith("# ")]`
  },
  {
    id: 'typescript-generic-type-guard',
    language: 'TypeScript',
    aliases: ['typescript', 'ts'],
    difficulty: 'medium',
    category: 'web',
    quizSuitability: 'excellent',
    highlightLanguage: 'typescript',
    confusionGroup: ['JavaScript', 'Flow', 'C#', 'Kotlin'],
    discriminators: ['generic function', 'keyof type operator', 'type guard return', 'unknown type'],
    explanation:
      'This is TypeScript. keyof, unknown, generic constraints, and a value is T type predicate are TypeScript-only clues.',
    code: `type FeatureFlags = {
  betaCheckout: boolean;
  darkMode: boolean;
};

function hasFlag<T extends object>(value: T, key: keyof T): key is keyof T {
  return Object.prototype.hasOwnProperty.call(value, key);
}

export function isEnabled(flags: FeatureFlags, name: unknown) {
  return typeof name === "string" && hasFlag(flags, name) && flags[name];
}`
  },
  {
    id: 'php-attributes-constructor-promotion',
    language: 'PHP',
    aliases: ['php'],
    difficulty: 'medium',
    category: 'web',
    quizSuitability: 'excellent',
    highlightLanguage: 'php',
    confusionGroup: ['Hack', 'JavaScript', 'Ruby', 'C#'],
    discriminators: ['PHP attribute syntax', 'constructor property promotion', 'readonly property', 'named class method'],
    explanation:
      'This is PHP. #[...] attributes, constructor property promotion, readonly properties, and $ variables are modern PHP fingerprints.',
    code: `<?php

#[Route("/invoices/{id}", methods: ["GET"])]
final class ShowInvoice
{
    public function __construct(
        private readonly InvoiceRepository $invoices,
    ) {}

    public function __invoke(string $id): Response
    {
        return new JsonResponse($this->invoices->find($id));
    }
}`
  },
  {
    id: 'scala-given-extension',
    language: 'Scala',
    aliases: ['scala'],
    difficulty: 'hard',
    category: 'functional',
    quizSuitability: 'excellent',
    highlightLanguage: 'scala',
    confusionGroup: ['Kotlin', 'Haskell', 'F#', 'Java'],
    discriminators: ['given instance', 'extension method', 'using parameter', 'Scala 3 indentation syntax'],
    explanation:
      'This is Scala. given, extension, using parameters, and indentation-based Scala 3 syntax separate it from Java and Kotlin.',
    code: `trait Encoder[A]:
  def encode(value: A): String

given Encoder[User] with
  def encode(user: User): String = s"\${user.id}:\${user.email}"

extension [A](value: A)
  def asJson(using encoder: Encoder[A]): String =
    encoder.encode(value)`
  }
];
