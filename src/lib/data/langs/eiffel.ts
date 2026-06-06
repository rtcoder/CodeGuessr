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
  }
];

export default eiffel;
