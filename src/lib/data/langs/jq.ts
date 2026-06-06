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
  },
  {
    id: "jq-reduce-object",
    language: "jq",
    aliases: ["jq"],
    difficulty: "hard",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "jq",
    confusionGroup: ["Jsonnet","JavaScript","SQL","AWK"],
    discriminators: ["reduce expression","as binding","object update operator","JSON path assignment"],
    explanation: "This is jq. This snippet uses a distinct jq idiom: reduce expression, as binding, object update operator.",
    code: `reduce .events[] as $event ({};
  .[$event.type] += 1
)`,
  },
  {
    id: "jq-slurp-group",
    language: "jq",
    aliases: ["jq"],
    difficulty: "hard",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "jq",
    confusionGroup: ["Jsonnet","JavaScript","SQL","AWK"],
    discriminators: ["slurp input flag style","group_by","map object construction","length aggregation"],
    explanation: "This is jq. This snippet uses a distinct jq idiom: slurp input flag style, group_by, map object construction.",
    code: `group_by(.service)
| map({ service: .[0].service, count: length })
| sort_by(.service)`,
  }
];

export default jq;
