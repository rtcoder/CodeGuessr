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
  }
];

export default v;
