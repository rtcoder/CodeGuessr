import type { CodeQuestion } from '$lib/types';

const odin: CodeQuestion[] = [
  {
    id: "odin-proc-slice",
    language: "Odin",
    aliases: ["odin"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "odin",
    confusionGroup: ["Zig", "Go", "C", "V"],
    discriminators: ["package declaration", "proc function syntax", "slice type []User", "context/temp allocator idioms"],
    explanation: "This is Odin. package declarations, proc syntax, explicit slice types, and Odin-style append loops are distinctive.",
    code: `package users

User :: struct {
    name: string,
    active: bool,
}

active_names :: proc(users: []User) -> []string {
    names := make([dynamic]string)
    for user in users {
        if user.active {
            append(&names, user.name)
        }
    }
    return names[:]
}`,
  },
  {
    id: "odin-defer-context",
    language: "Odin",
    aliases: ["odin"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "odin",
    confusionGroup: ["Zig","Go","C","V"],
    discriminators: ["defer statement","context allocator","make dynamic array","append procedure"],
    explanation: "This is Odin. This snippet uses a distinct Odin idiom: defer statement, context allocator, make dynamic array.",
    code: `package demo

main :: proc() {
  values := make([dynamic]int)
  defer delete(values)

  append(&values, 1)
  append(&values, 2)
}`,
  },
  {
    id: "odin-distinct-union",
    language: "Odin",
    aliases: ["odin"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "odin",
    confusionGroup: ["Zig","Go","C","V"],
    discriminators: ["distinct type","union declaration","switch over union","case syntax"],
    explanation: "This is Odin. This snippet uses a distinct Odin idiom: distinct type, union declaration, switch over union.",
    code: `package demo

Event :: union {
  Click,
  Key,
}

Click :: struct {x, y: int}
Key :: struct {code: string}`,
  }
];

export default odin;
