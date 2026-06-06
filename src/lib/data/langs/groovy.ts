import type { CodeQuestion } from '$lib/types';

const groovy: CodeQuestion[] = [
  {
    id: "groovy-collect-closure",
    language: "Groovy",
    aliases: ["groovy"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "groovy",
    confusionGroup: ["Java", "Kotlin", "Scala", "Ruby"],
    discriminators: ["def dynamic declaration", "closure with it", "findAll/collect collection methods", "GString interpolation"],
    explanation: "This is Groovy. def, findAll, collect, closure shorthand it, and GString interpolation distinguish it from Java.",
    code: `def activeLabels = users
    .findAll { it.active }
    .collect { user -> "\${user.name} <\${user.email}>" }

println activeLabels.join(", ")`,
  }
];

export default groovy;
