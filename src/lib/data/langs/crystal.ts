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
  },
  {
    id: "crystal-macro-finished",
    language: "Crystal",
    aliases: ["crystal","cr"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "crystal",
    confusionGroup: ["Ruby","Nim","Elixir","Go"],
    discriminators: ["macro definition","{{ }} macro interpolation","Crystal compile-time metaprogramming","def generated method"],
    explanation: "This is Crystal. This snippet uses a distinct Crystal idiom: macro definition, {{ }} macro interpolation, Crystal compile-time metaprogramming.",
    code: `macro field_reader(name)
  def {{name.id}}
    @{{name.id}}
  end
end

class Account
  field_reader plan
end`,
  },
  {
    id: "crystal-channel-spawn",
    language: "Crystal",
    aliases: ["crystal","cr"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "crystal",
    confusionGroup: ["Ruby","Nim","Elixir","Go"],
    discriminators: ["Channel(T)","spawn fiber","receive method","static generic type"],
    explanation: "This is Crystal. This snippet uses a distinct Crystal idiom: Channel(T), spawn fiber, receive method.",
    code: `channel = Channel(String).new

spawn do
  channel.send "ready"
end

message = channel.receive`,
  }
];

export default crystal;
