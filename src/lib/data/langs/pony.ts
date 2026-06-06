import type { CodeQuestion } from '$lib/types';

const pony: CodeQuestion[] = [
  {
    id: "pony-actor-be",
    language: "Pony",
    aliases: ["pony", "pony language"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Rust", "Erlang", "Swift", "D"],
    discriminators: ["actor keyword", "be behavior", "Env parameter", "Pony capability style"],
    explanation: "This is Pony. This snippet uses actor keyword, be behavior, Env parameter as recognizable fingerprints.",
    code: `actor Main
  new create(env: Env) =>
    env.out.print("ready")

actor Worker
  be run(id: U64) =>
    None`
  },
  {
    id: "pony-class-refcap",
    language: "Pony",
    aliases: ["pony", "pony language"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Rust", "Erlang", "Swift", "D"],
    discriminators: ["ref capability", "iso object", "recover expression", "Pony reference capabilities"],
    explanation: "This is Pony. This snippet uses ref capability, iso object, recover expression as recognizable fingerprints.",
    code: `class Buffer
  let _values: Array[U8] ref

  new create() =>
    _values = recover Array[U8] end`
  },
  {
    id: "pony-interface-trait",
    language: "Pony",
    aliases: ["pony", "pony language"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Rust", "Erlang", "Swift", "D"],
    discriminators: ["interface val", "fun signature", "primitive object", "Pony type declarations"],
    explanation: "This is Pony. This snippet uses interface val, fun signature, primitive object as recognizable fingerprints.",
    code: `interface val Encoder
  fun encode(): String

primitive JsonEncoder
  fun apply(value: Encoder): String =>
    value.encode()`
  }
];

export default pony;
