import type { CodeQuestion } from '$lib/types';

const fish: CodeQuestion[] = [
  {
    id: "fish-function",
    language: "fish",
    aliases: ["fish", "fish shell"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Bash", "tcsh/csh", "PowerShell", "Zsh"],
    discriminators: ["function/end syntax", "set command", "command substitution parentheses", "fish variable expansion"],
    explanation: "This is fish. This snippet uses function/end syntax, set command, command substitution parentheses as recognizable fingerprints.",
    code: `function deploy --argument-names env
  set tag (git rev-parse --short HEAD)
  echo "deploying $tag to $env"
end`
  },
  {
    id: "fish-for-switch",
    language: "fish",
    aliases: ["fish", "fish shell"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Bash", "tcsh/csh", "PowerShell", "Zsh"],
    discriminators: ["for loop", "switch/case", "string match command", "end terminators"],
    explanation: "This is fish. This snippet uses for loop, switch/case, string match command as recognizable fingerprints.",
    code: `for file in *.json
  switch $file
    case '*prod*'
      echo "production $file"
    case '*'
      echo "skip $file"
  end
end`
  },
  {
    id: "fish-universal-var",
    language: "fish",
    aliases: ["fish", "fish shell"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Bash", "tcsh/csh", "PowerShell", "Zsh"],
    discriminators: ["set -Ux universal variable", "abbr command", "contains test", "fish-specific flags"],
    explanation: "This is fish. This snippet uses set -Ux universal variable, abbr command, contains test as recognizable fingerprints.",
    code: `set -Ux CODEGUESSR_MODE normal
abbr --add gs git status

if contains -- $CODEGUESSR_MODE easy normal hard
  echo "known mode"
end`
  }
];

export default fish;
