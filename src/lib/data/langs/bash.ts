import type { CodeQuestion } from '$lib/types';

const bash: CodeQuestion[] = [
  {
    id: "bash-case-readarray",
    language: "Bash",
    aliases: ["bash", "shell", "sh"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "bash",
    confusionGroup: ["fish", "PowerShell", "tcsh/csh", "AWK"],
    discriminators: ["#!/usr/bin/env bash", "set -euo pipefail", "readarray", "case statement", "${var} expansion"],
    explanation: "This is Bash. The shebang, set -euo pipefail, readarray, case syntax, and ${...} expansion identify it.",
    code: `#!/usr/bin/env bash
set -euo pipefail

readarray -t files < <(find data -name '*.json')

for file in "\${files[@]}"; do
  case "\${file}" in
    *.test.json) continue ;;
    *) jq -r '.name' "\${file}" ;;
  esac
done`,
  }
];

export default bash;
