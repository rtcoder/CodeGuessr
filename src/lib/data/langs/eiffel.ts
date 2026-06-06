import type { CodeQuestion } from '$lib/types';

const eiffel: CodeQuestion[] = [
  {
    id: "eiffel-feature-require-ensure",
    language: "Eiffel",
    aliases: ["eiffel"],
    difficulty: "hard",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "eiffel",
    confusionGroup: ["Ada", "Delphi/Object Pascal", "Smalltalk", "Ruby"],
    discriminators: ["class/feature sections", "require/ensure contracts", "do/end blocks", "Result variable"],
    explanation: "This is Eiffel. feature sections, Design by Contract require/ensure clauses, do/end blocks, and Result are Eiffel fingerprints.",
    code: `class USER_FORMATTER

feature
    label (user: USER): STRING
        require
            user_exists: user /= Void
        do
            Result := user.name + " <" + user.email + ">"
        ensure
            not_empty: not Result.is_empty
        end
end`,
  },
  {
    id: "eiffel-once-routine",
    language: "Eiffel",
    aliases: ["eiffel"],
    difficulty: "hard",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "eiffel",
    confusionGroup: ["Ada","Delphi/Object Pascal","Smalltalk","Ruby"],
    discriminators: ["once routine","Result variable","feature section","Eiffel routine syntax"],
    explanation: "This is Eiffel. This snippet uses a distinct Eiffel idiom: once routine, Result variable, feature section.",
    code: `feature -- Access

  default_currency: STRING
    once
      Result := "EUR"
    end`,
  },
  {
    id: "eiffel-agent-iteration",
    language: "Eiffel",
    aliases: ["eiffel"],
    difficulty: "hard",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "eiffel",
    confusionGroup: ["Ada","Delphi/Object Pascal","Smalltalk","Ruby"],
    discriminators: ["agent expression","across loop","as cursor alias","loop/end"],
    explanation: "This is Eiffel. This snippet uses a distinct Eiffel idiom: agent expression, across loop, as cursor alias.",
    code: `feature
  print_all (items: LIST [STRING])
    do
      across items as item loop
        print (item.item)
      end
    end`,
  }
];

export default eiffel;
