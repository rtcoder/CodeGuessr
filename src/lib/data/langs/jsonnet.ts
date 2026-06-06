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
  },
  {
    id: "jsonnet-hidden-field",
    language: "Jsonnet",
    aliases: ["jsonnet"],
    difficulty: "hard",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "jsonnet",
    confusionGroup: ["jq","JavaScript","Nix","Dhall"],
    discriminators: ["hidden field ::","self reference","object inheritance +","local function"],
    explanation: "This is Jsonnet. This snippet uses a distinct Jsonnet idiom: hidden field ::, self reference, object inheritance +.",
    code: `local service(name) = {
  name: name,
  ports:: [80],
  endpoints: [self.name + ".internal"],
};

service("api") + { replicas: 3 }`,
  },
  {
    id: "jsonnet-std-manifest",
    language: "Jsonnet",
    aliases: ["jsonnet"],
    difficulty: "hard",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "jsonnet",
    confusionGroup: ["jq","JavaScript","Nix","Dhall"],
    discriminators: ["std.manifestJsonEx","std.map","function literal","JSON-like object generation"],
    explanation: "This is Jsonnet. This snippet uses a distinct Jsonnet idiom: std.manifestJsonEx, std.map, function literal.",
    code: `local labels = ["api", "worker"];

{
  rendered: std.manifestJsonEx({
    services: std.map(function(name) { name: name }, labels),
  }, "  ")
}`,
  }
];

export default jsonnet;
