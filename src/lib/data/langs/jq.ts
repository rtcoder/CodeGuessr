import type { CodeQuestion } from '$lib/types';

const jq: CodeQuestion[] = [
  {
    id: "jq-map-select",
    language: "jq",
    aliases: ["jq"],
    difficulty: "hard",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "jq",
    confusionGroup: ["Jsonnet", "JavaScript", "SQL", "AWK"],
    discriminators: ["JSON filter pipeline", "map/select functions", ".field access", "object construction in filter"],
    explanation: "This is jq. JSON filter pipelines, .field access, map/select, and object construction filters identify jq.",
    code: `.users
| map(select(.active == true))
| map({
    name,
    email,
    label: "\\(.name) <\\(.email)>"
  })`,
  }
];

export default jq;
