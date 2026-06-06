import type { CodeQuestion } from '$lib/types';

const javascript: CodeQuestion[] = [
  {
    id: "javascript-promise-destructuring",
    language: "JavaScript",
    aliases: ["javascript", "js", "node", "nodejs", "node.js", "ecmascript"],
    difficulty: "easy",
    category: "web",
    quizSuitability: "excellent",
    highlightLanguage: "javascript",
    confusionGroup: ["TypeScript", "PHP", "Lua", "Dart"],
    discriminators: ["import/export module syntax", "async function", "Promise.all", "object destructuring"],
    explanation: "This is JavaScript. ESM imports, async functions, Promise.all, and object destructuring are strong modern JavaScript clues.",
    code: `import { readFile } from "node:fs/promises";

export async function loadUsers(paths) {
  const files = await Promise.all(paths.map((path) => readFile(path, "utf8")));
  return files
    .map(JSON.parse)
    .filter(({ active }) => active)
    .map(({ name }) => name);
}`,
  }
];

export default javascript;
