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
  },
  {
    id: "bash-getopts-trap",
    language: "Bash",
    aliases: ["bash","shell","sh"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "bash",
    confusionGroup: ["fish","PowerShell","tcsh/csh","AWK"],
    discriminators: ["getopts loop","trap cleanup","case option parsing","mktemp command substitution"],
    explanation: "This is Bash. This snippet uses a distinct Bash idiom: getopts loop, trap cleanup, case option parsing.",
    code: `#!/usr/bin/env bash
set -euo pipefail

tmp="$(mktemp)"
trap 'rm -f "$tmp"' EXIT

while getopts ":o:v" opt; do
  case "$opt" in
    o) output="$OPTARG" ;;
    v) set -x ;;
    *) exit 64 ;;
  esac
done`,
  },
  {
    id: "bash-associative-array",
    language: "Bash",
    aliases: ["bash","shell","sh"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "bash",
    confusionGroup: ["fish","PowerShell","tcsh/csh","AWK"],
    discriminators: ["declare -A associative array","parameter expansion default","printf builtin","indirect key iteration"],
    explanation: "This is Bash. This snippet uses a distinct Bash idiom: declare -A associative array, parameter expansion default, printf builtin.",
    code: `#!/usr/bin/env bash
declare -A counts=([api]=3 [worker]=7)

service="\${1:-api}"
counts[$service]=$(( \${counts[$service]:-0} + 1 ))

for key in "\${!counts[@]}"; do
  printf "%s=%d\n" "$key" "\${counts[$key]}"
done`,
  }
];

export default bash;
