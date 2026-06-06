import type { CodeQuestion } from '$lib/types';

const rust: CodeQuestion[] = [
  {
    id: "rust-match-option",
    language: "Rust",
    aliases: ["rust", "rs"],
    difficulty: "medium",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "rust",
    confusionGroup: ["Go", "Swift", "C++", "Haskell"],
    discriminators: ["Option<T>", "match", "Some/None variants", "println! macro"],
    explanation: "This is Rust. Option, Some/None variants, match arms, format!, and println! are strong Rust fingerprints.",
    code: `fn describe_port(port: Option<u16>) -> String {
    match port {
        Some(443) => "secure".to_string(),
        Some(value) => format!("custom:{value}"),
        None => "missing".to_string(),
    }
}

println!("{}", describe_port(Some(8080)));`,
  },
  {
    id: "rust-result-question-mark",
    language: "Rust",
    aliases: ["rust", "rs"],
    difficulty: "medium",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "rust",
    confusionGroup: ["Go", "C++", "Zig", "Swift"],
    discriminators: ["use std::fs", "Result<T, E>", "? error propagation", "serde_json::from_str"],
    explanation: "This is Rust. Result return types, borrowed &str parameters, the ? operator, and crate-style paths like serde_json::from_str identify it.",
    code: `use std::fs;

fn load_config(path: &str) -> Result<Config, Box<dyn std::error::Error>> {
    let contents = fs::read_to_string(path)?;
    let config = serde_json::from_str::<Config>(&contents)?;
    Ok(config)
}`,
  },
  {
    id: "rust-trait-impl-result",
    language: "Rust",
    aliases: ["rust","rs"],
    difficulty: "medium",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "rust",
    confusionGroup: ["Go","Swift","C++","Haskell"],
    discriminators: ["trait declaration","impl block","Result<T, E>","question-mark error propagation"],
    explanation: "This is Rust. This snippet uses a distinct Rust idiom: trait declaration, impl block, Result<T, E>.",
    code: `trait Loader {
    fn load(&self, id: &str) -> Result<String, std::io::Error>;
}

fn title(loader: &impl Loader, id: &str) -> Result<String, std::io::Error> {
    let raw = loader.load(id)?;
    Ok(raw.trim().to_owned())
}`,
  }
];

export default rust;
