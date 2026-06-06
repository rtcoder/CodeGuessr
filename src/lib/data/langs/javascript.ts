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
  },
  {
    id: "javascript-proxy-reflect",
    language: "JavaScript",
    aliases: ["javascript","js","node","nodejs","node.js","ecmascript"],
    difficulty: "easy",
    category: "web",
    quizSuitability: "excellent",
    highlightLanguage: "javascript",
    confusionGroup: ["TypeScript","PHP","Lua","Dart"],
    discriminators: ["Proxy object","Reflect.get","dynamic property trap","export const"],
    explanation: "This is JavaScript. This snippet uses a distinct JavaScript idiom: Proxy object, Reflect.get, dynamic property trap.",
    code: `export const tracked = (target, log) => new Proxy(target, {
  get(object, property, receiver) {
    log.push(String(property));
    return Reflect.get(object, property, receiver);
  }
});`,
  },
  {
    id: "javascript-generator-destructuring",
    language: "JavaScript",
    aliases: ["javascript","js","node","nodejs","node.js","ecmascript"],
    difficulty: "easy",
    category: "web",
    quizSuitability: "excellent",
    highlightLanguage: "javascript",
    confusionGroup: ["TypeScript","PHP","Lua","Dart"],
    discriminators: ["function* generator","yield keyword","object destructuring defaults","for...of loop"],
    explanation: "This is JavaScript. This snippet uses a distinct JavaScript idiom: function* generator, yield keyword, object destructuring defaults.",
    code: `function* pages(response) {
  for (const { items = [], next } of response.links) {
    yield* items;
    if (!next) return;
  }
}`,
  }
];

export default javascript;
