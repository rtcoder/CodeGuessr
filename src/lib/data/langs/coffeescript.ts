import type { CodeQuestion } from '$lib/types';

const coffeescript: CodeQuestion[] = [
  {
    id: "coffeescript-fat-arrow-existential",
    language: "CoffeeScript",
    aliases: ["coffeescript", "coffee"],
    difficulty: "hard",
    category: "web",
    quizSuitability: "excellent",
    highlightLanguage: "coffeescript",
    confusionGroup: ["JavaScript", "TypeScript", "Ruby", "LiveScript"],
    discriminators: ["significant indentation", "fat arrow =>", "existential operator ?", "implicit returns"],
    explanation: "This is CoffeeScript. Indentation, => functions, existential checks, and implicit returns identify it.",
    code: `loadUsers = (paths) ->
  files = await Promise.all paths.map (path) -> readFile path, 'utf8'
  files
    .map JSON.parse
    .filter (user) -> user.active?
    .map (user) => "#{user.name} <#{user.email}>"`,
  }
];

export default coffeescript;
