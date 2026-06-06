import type { CodeQuestion } from '$lib/types';

const v: CodeQuestion[] = [
  {
    id: "v-option-result",
    language: "V",
    aliases: ["v", "vlang"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "v",
    confusionGroup: ["Go", "Rust", "Zig", "Nim"],
    discriminators: ["fn declaration", "or error handling block", "struct syntax", "array filter/map methods"],
    explanation: "This is V. fn declarations, Go-like syntax, or error blocks, and array filter/map chains identify V.",
    code: `struct User {
    name string
    active bool
}

fn active_names(users []User) []string {
    return users
        .filter(it.active)
        .map(it.name)
}

config := read_config('app.toml') or {
    eprintln(err)
    return
}`,
  },
  {
    id: "v-comptime-generic",
    language: "V",
    aliases: ["v","vlang"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "v",
    confusionGroup: ["Go","Rust","Zig","Nim"],
    discriminators: ["generic function with [T]","comptime type parameter","array append syntax","fn declaration"],
    explanation: "This is V. This snippet uses a distinct V idiom: generic function with [T], comptime type parameter, array append syntax.",
    code: `fn keep_even[T](values []T, predicate fn (T) bool) []T {
  mut out := []T{}
  for value in values {
    if predicate(value) {
      out << value
    }
  }
  return out
}`,
  },
  {
    id: "v-sumtype-match",
    language: "V",
    aliases: ["v","vlang"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "v",
    confusionGroup: ["Go","Rust","Zig","Nim"],
    discriminators: ["sum type alias","match expression","struct literals","or error propagation"],
    explanation: "This is V. This snippet uses a distinct V idiom: sum type alias, match expression, struct literals.",
    code: `struct Click { x int y int }
struct Key { code string }
type Event = Click | Key

fn label(event Event) string {
  return match event {
    Click { "click:\${event.x},\${event.y}" }
    Key { "key:\${event.code}" }
  }
}`,
  }
];

export default v;
