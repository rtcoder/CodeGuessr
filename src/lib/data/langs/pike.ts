import type { CodeQuestion } from '$lib/types';

const pike: CodeQuestion[] = [
  {
    id: "pike-class-inherit",
    language: "Pike",
    aliases: ["pike", "pike language"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["C", "Java", "PHP", "Perl"],
    discriminators: ["class declaration", "inherit keyword", "mapping type", "Pike C-like syntax"],
    explanation: "This is Pike. This snippet uses class declaration, inherit keyword, mapping type as recognizable fingerprints.",
    code: `class Cache {
  mapping(string:string) values = ([]);

  string get(string key) {
    return values[key];
  }
}`
  },
  {
    id: "pike-lambda-array",
    language: "Pike",
    aliases: ["pike", "pike language"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["C", "Java", "PHP", "Perl"],
    discriminators: ["array type string *", "lambda function", "map method", "Pike typed arrays"],
    explanation: "This is Pike. This snippet uses array type string *, lambda function, map method as recognizable fingerprints.",
    code: `array(string) names = ({ "api", "worker" });
array(string) labels = names->map(lambda(string name) {
  return upper_case(name);
});`
  },
  {
    id: "pike-foreach-catch",
    language: "Pike",
    aliases: ["pike", "pike language"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["C", "Java", "PHP", "Perl"],
    discriminators: ["foreach loop", "catch expression", "Stdio.File", "Pike error handling"],
    explanation: "This is Pike. This snippet uses foreach loop, catch expression, Stdio.File as recognizable fingerprints.",
    code: `mixed error = catch {
  Stdio.File file = Stdio.File("config.json", "r");
  write(file->read());
};`
  }
];

export default pike;
