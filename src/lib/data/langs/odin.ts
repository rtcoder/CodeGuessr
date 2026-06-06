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
  }
];

export default odin;
