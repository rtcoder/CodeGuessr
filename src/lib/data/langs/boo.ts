import type { CodeQuestion } from '$lib/types';

const boo: CodeQuestion[] = [
  {
    id: "boo-class-property",
    language: "Boo",
    aliases: ["boo", "boo language"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Python", "C#", "Groovy", "VBScript"],
    discriminators: ["class declaration", "property syntax", "def method", "Python-like indentation on CLR"],
    explanation: "This is Boo. This snippet uses class declaration, property syntax, def method as recognizable fingerprints.",
    code: `class Invoice:
    [Property(Id)]
    _id as string

    def Label():
        return "invoice:" + Id`
  },
  {
    id: "boo-duck-typing",
    language: "Boo",
    aliases: ["boo", "boo language"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Python", "C#", "Groovy", "VBScript"],
    discriminators: ["duck type", "for item in collection", "string interpolation", "Boo dynamic features"],
    explanation: "This is Boo. This snippet uses duck type, for item in collection, string interpolation as recognizable fingerprints.",
    code: `def render(items as duck):
    for item in items:
        print "\${item.Name}:\${item.Total}"`
  },
  {
    id: "boo-macro-like",
    language: "Boo",
    aliases: ["boo", "boo language"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Python", "C#", "Groovy", "VBScript"],
    discriminators: ["unless statement", "using block", "Boo control syntax", "CLR types"],
    explanation: "This is Boo. This snippet uses unless statement, using block, Boo control syntax as recognizable fingerprints.",
    code: `unless File.Exists(path):
    raise FileNotFoundException(path)

using reader = File.OpenText(path):
    print reader.ReadLine()`
  }
];

export default boo;
