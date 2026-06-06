import type { CodeQuestion } from '$lib/types';

const io: CodeQuestion[] = [
  {
    id: "io-prototype-slot",
    language: "Io",
    aliases: ["io", "io language"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Smalltalk", "Ruby", "Lua", "Factor"],
    discriminators: ["Object clone", "slot assignment :=", "method definition", "message passing syntax"],
    explanation: "This is Io. This snippet uses Object clone, slot assignment :=, method definition as recognizable fingerprints.",
    code: `Account := Object clone
Account balance := 0
Account deposit := method(amount,
  balance = balance + amount
)`
  },
  {
    id: "io-list-map",
    language: "Io",
    aliases: ["io", "io language"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Smalltalk", "Ruby", "Lua", "Factor"],
    discriminators: ["list() literal", "map/select messages", "block argument syntax", "Io message chains"],
    explanation: "This is Io. This snippet uses list() literal, map/select messages, block argument syntax as recognizable fingerprints.",
    code: `values := list(1, 2, 3, 4)
evens := values select(value, value % 2 == 0)
labels := evens map(value, "id:" .. value asString)`
  },
  {
    id: "io-coroutine",
    language: "Io",
    aliases: ["io", "io language"],
    difficulty: "insane",
    category: "esoteric",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["Smalltalk", "Ruby", "Lua", "Factor"],
    discriminators: ["Coroutine clone", "yield message", "resume message", "Io prototype style"],
    explanation: "This is Io. This snippet uses Coroutine clone, yield message, resume message as recognizable fingerprints.",
    code: `worker := Coroutine clone
worker run := method(
  yield("ready")
  yield("done")
)
worker resume`
  }
];

export default io;
