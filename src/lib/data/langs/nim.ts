import type { CodeQuestion } from '$lib/types';

const nim: CodeQuestion[] = [
  {
    id: "nim-seq-comprehension",
    language: "Nim",
    aliases: ["nim"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "nim",
    confusionGroup: ["Python", "Crystal", "V", "Zig"],
    discriminators: ["proc declaration", "seq[T]", "for loop with indentation", "result implicit return variable"],
    explanation: "This is Nim. proc declarations, seq[T], indentation, and the implicit result variable are Nim fingerprints.",
    code: `type
  User = object
    name: string
    active: bool

proc activeNames(users: seq[User]): seq[string] =
  for user in users:
    if user.active:
      result.add user.name`,
  },
  {
    id: "nim-template",
    language: "Nim",
    aliases: ["nim"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "nim",
    confusionGroup: ["Python","Crystal","V","Zig"],
    discriminators: ["template declaration","untyped parameter","colon call syntax","Nim metaprogramming"],
    explanation: "This is Nim. This snippet uses a distinct Nim idiom: template declaration, untyped parameter, colon call syntax.",
    code: `template benchmark(name: string, body: untyped) =
  let start = epochTime()
  body
  echo name, ": ", epochTime() - start

benchmark "load":
  discard readFile("data.txt")`,
  },
  {
    id: "nim-variant-object",
    language: "Nim",
    aliases: ["nim"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "nim",
    confusionGroup: ["Python","Crystal","V","Zig"],
    discriminators: ["case object variant","of branches","distinct object fields","proc with case expression"],
    explanation: "This is Nim. This snippet uses a distinct Nim idiom: case object variant, of branches, distinct object fields.",
    code: `type
  Event = object
    case kind: string
    of "click": x, y: int
    of "key": code: string
    else: discard`,
  }
];

export default nim;
