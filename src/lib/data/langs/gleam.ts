import type { CodeQuestion } from '$lib/types';

const gleam: CodeQuestion[] = [
  {
    id: "gleam-result-pipeline",
    language: "Gleam",
    aliases: ["gleam", "gleam"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Elixir", "Erlang", "Rust", "OCaml"],
    discriminators: ["Result type", "use expression", "pipe operator", "Gleam import syntax"],
    explanation: "This is Gleam. This snippet uses Result type, use expression, pipe operator as recognizable fingerprints.",
    code: `import gleam/result

pub fn load_label(id: String) -> Result(String, String) {
  use user <- result.try(fetch_user(id))
  Ok(user.name)
}`
  },
  {
    id: "gleam-custom-type",
    language: "Gleam",
    aliases: ["gleam", "gleam"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Elixir", "Erlang", "Rust", "OCaml"],
    discriminators: ["pub type", "variant constructors", "case expression", "Gleam lowercase functions"],
    explanation: "This is Gleam. This snippet uses pub type, variant constructors, case expression as recognizable fingerprints.",
    code: `pub type Status {
  Pending
  Done(id: Int)
}

pub fn label(status: Status) -> String {
  case status {
    Pending -> "pending"
    Done(id) -> int.to_string(id)
  }
}`
  },
  {
    id: "gleam-list-map",
    language: "Gleam",
    aliases: ["gleam", "gleam"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Elixir", "Erlang", "Rust", "OCaml"],
    discriminators: ["gleam/list import", "anonymous fn", "typed function signature", "immutable pipeline"],
    explanation: "This is Gleam. This snippet uses gleam/list import, anonymous fn, typed function signature as recognizable fingerprints.",
    code: `import gleam/list

pub fn active_names(users: List(User)) -> List(String) {
  users
  |> list.filter(fn(user) { user.active })
  |> list.map(fn(user) { user.name })
}`
  }
];

export default gleam;
