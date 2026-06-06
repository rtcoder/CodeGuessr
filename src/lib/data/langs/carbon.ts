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
  },
  {
    id: "carbon-choice-match",
    language: "Carbon",
    aliases: ["carbon","carbon language"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["C++","Rust","Zig","Swift"],
    discriminators: ["choice declaration","match expression","Carbon-style variant cases","fn return type arrow"],
    explanation: "This is Carbon. This snippet uses a distinct Carbon idiom: choice declaration, match expression, Carbon-style variant cases.",
    code: `choice Status {
  Pending,
  Failed(String),
}

fn Label(status: Status) -> String {
  return match (status) {
    case .Pending => "pending";
    case .Failed(reason) => reason;
  };
}`,
  },
  {
    id: "carbon-impl-interface",
    language: "Carbon",
    aliases: ["carbon","carbon language"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "good",
    highlightLanguage: "clike",
    confusionGroup: ["C++","Rust","Zig","Swift"],
    discriminators: ["interface declaration","impl block","Self type","Carbon package syntax"],
    explanation: "This is Carbon. This snippet uses a distinct Carbon idiom: interface declaration, impl block, Self type.",
    code: `interface Printable {
  fn Print[self: Self]();
}

class Receipt {
  var id: String;
}

impl Receipt as Printable {
  fn Print[self: Self]() { Console.Print(self.id); }
}`,
  }
];

export default carbon;
