import type { CodeQuestion } from '$lib/types';

const ruby: CodeQuestion[] = [
  {
    id: "ruby-block-symbol-to-proc",
    language: "Ruby",
    aliases: ["ruby", "rb"],
    difficulty: "easy",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "ruby",
    confusionGroup: ["Python", "Perl", "Crystal", "Elixir"],
    discriminators: ["symbol keys", "select block", "&:name symbol-to-proc", "puts"],
    explanation: "This is Ruby. Block parameters between pipes, symbols like :active, &:name, and puts are Ruby fingerprints.",
    code: `active_names = users
  .select { |user| user[:active] }
  .map(&:name)
  .uniq

puts active_names.join(", ")`,
  },
  {
    id: "ruby-pattern-match-case-in",
    language: "Ruby",
    aliases: ["ruby", "rb"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "ruby",
    confusionGroup: ["Python", "Elixir", "Crystal", "Perl"],
    discriminators: ["case/in pattern matching", "hash symbols", "then expression", "nil fallback"],
    explanation: "This is Ruby. The case/in pattern matching syntax, symbol keys, then branches, and nil fallback point to modern Ruby.",
    code: `def label(event)
  case event
  in { type: :created, user: { name: } }
    "created by #{name}"
  in { type: :deleted, id: }
    "deleted #{id}"
  else
    nil
  end
end`,
  },
  {
    id: "ruby-pattern-matching",
    language: "Ruby",
    aliases: ["ruby","rb"],
    difficulty: "easy",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "ruby",
    confusionGroup: ["Python","Perl","Crystal","Elixir"],
    discriminators: ["case/in pattern matching","hash pattern","keyword-style hash keys","string interpolation"],
    explanation: "This is Ruby. This snippet uses a distinct Ruby idiom: case/in pattern matching, hash pattern, keyword-style hash keys.",
    code: `def route(event)
  case event
  in {type: "invoice.paid", data: {id: id}}
    "receipt:#{id}"
  in {type: type}
    "ignored:#{type}"
  end
end`,
  }
];

export default ruby;
