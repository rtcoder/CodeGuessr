import type { CodeQuestion } from '$lib/types';

const crystal: CodeQuestion[] = [
  {
    id: "crystal-types-nilable",
    language: "Crystal",
    aliases: ["crystal", "cr"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "crystal",
    confusionGroup: ["Ruby", "Nim", "Elixir", "Go"],
    discriminators: ["Ruby-like syntax with static type annotations", "Nil union type", "def method : ReturnType", "map/select blocks"],
    explanation: "This is Crystal. Ruby-like blocks combined with static type annotations and nilable String? types identify it.",
    code: `struct User
  getter name : String
  getter email : String?

  def initialize(@name : String, @email : String?)
  end
end

def labels(users : Array(User)) : Array(String)
  users.select { |user| user.email }.map { |user| "#{user.name}: #{user.email}" }
end`,
  }
];

export default crystal;
