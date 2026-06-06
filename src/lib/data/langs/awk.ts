import type { CodeQuestion } from '$lib/types';

const awk: CodeQuestion[] = [
  {
    id: "awk-pattern-action",
    language: "AWK",
    aliases: ["awk", "awk", "gawk", "mawk"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["sed", "Perl", "Bash", "R"],
    discriminators: ["pattern-action blocks", "BEGIN block", "field variables $1", "awk associative arrays"],
    explanation: "This is AWK. This snippet uses pattern-action blocks, BEGIN block, field variables $1 as recognizable fingerprints.",
    code: `BEGIN { FS = "," }
$3 > 100 {
  totals[$1] += $3
}
END {
  for (customer in totals) print customer, totals[customer]
}`
  },
  {
    id: "awk-function",
    language: "AWK",
    aliases: ["awk", "awk", "gawk", "mawk"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["sed", "Perl", "Bash", "R"],
    discriminators: ["function declaration", "split built-in", "return statement", "awk arrays"],
    explanation: "This is AWK. This snippet uses function declaration, split built-in, return statement as recognizable fingerprints.",
    code: `function domain(email, parts) {
  split(email, parts, "@")
  return parts[2]
}

{ print domain($2) }`
  },
  {
    id: "awk-nextfile",
    language: "AWK",
    aliases: ["awk", "awk", "gawk", "mawk"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["sed", "Perl", "Bash", "R"],
    discriminators: ["NR/FNR variables", "nextfile command", "printf formatting", "regex pattern"],
    explanation: "This is AWK. This snippet uses NR/FNR variables, nextfile command, printf formatting as recognizable fingerprints.",
    code: `/ERROR/ {
  printf "%s:%d:%s\n", FILENAME, FNR, $0
  nextfile
}`
  }
];

export default awk;
