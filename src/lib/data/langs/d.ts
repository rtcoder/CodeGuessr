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
  }
];

export default d;
