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
  }
];

export default nim;
