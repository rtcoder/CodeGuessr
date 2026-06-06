import type { CodeQuestion } from '$lib/types';

const d: CodeQuestion[] = [
  {
    id: "d-ranges-template",
    language: "D",
    aliases: ["d", "dlang"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "d",
    confusionGroup: ["C++", "Rust", "Zig", "Nim"],
    discriminators: ["import std modules", "range pipeline with filter/map", "auto return type", "template-like lambda syntax"],
    explanation: "This is D. import std.*, auto, range pipelines with filter/map, and C-like syntax with high-level ranges are D fingerprints.",
    code: `import std.algorithm : filter, map;
import std.array : array;
import std.stdio : writeln;

auto activeNames(User[] users) {
    return users
        .filter!(user => user.active)
        .map!(user => user.name)
        .array;
}

writeln(activeNames(users));`,
  },
  {
    id: "d-contracts-invariant",
    language: "D",
    aliases: ["d","dlang"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "d",
    confusionGroup: ["C++","Rust","Zig","Nim"],
    discriminators: ["in contract","out contract","invariant block","D design-by-contract syntax"],
    explanation: "This is D. This snippet uses a distinct D idiom: in contract, out contract, invariant block.",
    code: `class Counter {
  private int value;

  void add(int delta)
  in { assert(delta > 0); }
  out { assert(value > 0); }
  do { value += delta; }

  invariant { assert(value >= 0); }
}`,
  },
  {
    id: "d-mixin-template",
    language: "D",
    aliases: ["d","dlang"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "d",
    confusionGroup: ["C++","Rust","Zig","Nim"],
    discriminators: ["mixin template","alias this","D template metaprogramming","compile-time code injection"],
    explanation: "This is D. This snippet uses a distinct D idiom: mixin template, alias this, D template metaprogramming.",
    code: `mixin template IdField() {
  string id;
  alias id this;
}

struct Customer {
  mixin IdField;
}`,
  }
];

export default d;
