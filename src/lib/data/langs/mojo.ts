import type { CodeQuestion } from '$lib/types';

const mojo: CodeQuestion[] = [
  {
    id: "mojo-fn-struct",
    language: "Mojo",
    aliases: ["mojo", "mojo"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Python", "Rust", "Cython", "Nim"],
    discriminators: ["fn declaration", "struct type", "var explicit type", "Python-like indentation with systems types"],
    explanation: "This is Mojo. This snippet uses fn declaration, struct type, var explicit type as recognizable fingerprints.",
    code: `struct Point:
    var x: Float64
    var y: Float64

fn length(point: Point) -> Float64:
    return (point.x * point.x + point.y * point.y).sqrt()`
  },
  {
    id: "mojo-inout",
    language: "Mojo",
    aliases: ["mojo", "mojo"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Python", "Rust", "Cython", "Nim"],
    discriminators: ["inout parameter", "fn mutability", "Int type", "Mojo ownership-flavored syntax"],
    explanation: "This is Mojo. This snippet uses inout parameter, fn mutability, Int type as recognizable fingerprints.",
    code: `fn increment(value: inout Int):
    value += 1

fn run():
    var counter = 0
    increment(counter)`
  },
  {
    id: "mojo-trait",
    language: "Mojo",
    aliases: ["mojo", "mojo"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Python", "Rust", "Cython", "Nim"],
    discriminators: ["trait declaration", "method signature", "impl block", "Mojo type system"],
    explanation: "This is Mojo. This snippet uses trait declaration, method signature, impl block as recognizable fingerprints.",
    code: `trait Renderable:
    fn render(self) -> String: ...

struct Badge(Renderable):
    fn render(self) -> String:
        return "badge"`
  }
];

export default mojo;
