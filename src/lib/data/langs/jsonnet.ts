import type { CodeQuestion } from '$lib/types';

const jsonnet: CodeQuestion[] = [
  {
    id: "jsonnet-object-comprehension",
    language: "Jsonnet",
    aliases: ["jsonnet"],
    difficulty: "hard",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "jsonnet",
    confusionGroup: ["jq", "JavaScript", "Nix", "Dhall"],
    discriminators: ["local binding", "object comprehension", "std.format", "JSON-like object syntax with +:"],
    explanation: "This is Jsonnet. local bindings, std library calls, object comprehensions, and JSON-like templating syntax identify it.",
    code: `local users = import 'users.libsonnet';

{
  activeLabels: [
    std.format('%s <%s>', user.name, user.email)
    for user in users
    if user.active
  ],
  metadata+: {
    generatedBy: 'jsonnet',
  },
}`,
  }
];

export default jsonnet;
