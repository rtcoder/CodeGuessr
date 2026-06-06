import type { CodeQuestion } from '$lib/types';

const carbon: CodeQuestion[] = [
  {
    id: "carbon-package-fn",
    language: "Carbon",
    aliases: ["carbon", "carbon language"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["C++", "Rust", "Zig", "Swift"],
    discriminators: ["package declaration", "fn Main() -> i32", "var with explicit type", "Carbon-style namespace syntax"],
    explanation: "This is Carbon. package syntax, fn Main() -> i32, and modern C++-successor style declarations point to Carbon.",
    code: `package Explorer api;

fn ActiveCount(users: Slice(User)) -> i32 {
  var count: i32 = 0;
  for (user: User in users) {
    if (user.active) {
      ++count;
    }
  }
  return count;
}`,
    notes: "Carbon is experimental, so syntax may evolve.",
  }
];

export default carbon;
