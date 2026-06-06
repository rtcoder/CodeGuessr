import type { CodeQuestion } from '$lib/types';

const ballerina: CodeQuestion[] = [
  {
    id: "ballerina-service-resource",
    language: "Ballerina",
    aliases: ["ballerina", "ballerina"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Go", "Java", "TypeScript", "Rust"],
    discriminators: ["service on listener", "resource function", "http:Caller", "returns error?"],
    explanation: "This is Ballerina. This snippet uses service on listener, resource function, http:Caller as recognizable fingerprints.",
    code: `import ballerina/http;

listener http:Listener api = new (8080);

service /billing on api {
    resource function get status() returns json {
        return { ok: true };
    }
}`
  },
  {
    id: "ballerina-check-error",
    language: "Ballerina",
    aliases: ["ballerina", "ballerina"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Go", "Java", "TypeScript", "Rust"],
    discriminators: ["check expression", "error? return type", "typedesc json", "Ballerina error flow"],
    explanation: "This is Ballerina. This snippet uses check expression, error? return type, typedesc json as recognizable fingerprints.",
    code: `function loadConfig(string path) returns json|error {
    string raw = check io:fileReadString(path);
    return check raw.fromJsonStringWithType();
}`
  },
  {
    id: "ballerina-record-union",
    language: "Ballerina",
    aliases: ["ballerina", "ballerina"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Go", "Java", "TypeScript", "Rust"],
    discriminators: ["record type", "union type", "match statement", "Ballerina structural typing"],
    explanation: "This is Ballerina. This snippet uses record type, union type, match statement as recognizable fingerprints.",
    code: `type Event record {|
    string id;
    "paid"|"failed" kind;
|};

function label(Event event) returns string {
    return match event.kind {
        "paid" => event.id,
        "failed" => "retry"
    };
}`
  }
];

export default ballerina;
