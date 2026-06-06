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
  },
  {
    id: "coffeescript-class-super",
    language: "CoffeeScript",
    aliases: ["coffeescript","coffee"],
    difficulty: "hard",
    category: "web",
    quizSuitability: "excellent",
    highlightLanguage: "coffeescript",
    confusionGroup: ["JavaScript","TypeScript","Ruby","LiveScript"],
    discriminators: ["class extends","constructor shorthand","super call","@ property shorthand"],
    explanation: "This is CoffeeScript. This snippet uses a distinct CoffeeScript idiom: class extends, constructor shorthand, super call.",
    code: `class ApiClient extends Client
  constructor: (@token, options = {}) ->
    super options

  headers: ->
    Authorization: "Bearer #{@token}"`,
  },
  {
    id: "coffeescript-destructuring-splat",
    language: "CoffeeScript",
    aliases: ["coffeescript","coffee"],
    difficulty: "hard",
    category: "web",
    quizSuitability: "excellent",
    highlightLanguage: "coffeescript",
    confusionGroup: ["JavaScript","TypeScript","Ruby","LiveScript"],
    discriminators: ["object destructuring","splat parameter","existential operator","implicit return"],
    explanation: "This is CoffeeScript. This snippet uses a distinct CoffeeScript idiom: object destructuring, splat parameter, existential operator.",
    code: `summarize = ({name, tags = []}, extras...) ->
  label = name ? "anonymous"
  "#{label}:#{tags.concat(extras).join ','}"`,
  }
];

export default coffeescript;
