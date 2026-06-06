import type { CodeQuestion } from '$lib/types';

const sed: CodeQuestion[] = [
  {
    id: "sed-substitute-label",
    language: "sed",
    aliases: ["sed", "sed"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["AWK", "Bash", "Perl", "Vim script"],
    discriminators: ["s/// substitution", "branch label :again", "t command", "sed script syntax"],
    explanation: "This is sed. This snippet uses s/// substitution, branch label :again, t command as recognizable fingerprints.",
    code: `:again
s/  / /g
t again
s/^/[normalized] /`
  },
  {
    id: "sed-hold-space",
    language: "sed",
    aliases: ["sed", "sed"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["AWK", "Bash", "Perl", "Vim script"],
    discriminators: ["hold space h/G", "address range", "p command", "-n style script"],
    explanation: "This is sed. This snippet uses hold space h/G, address range, p command as recognizable fingerprints.",
    code: `/^BEGIN$/,/^END$/{
  H
  /^END$/{
    x
    p
  }
}`
  },
  {
    id: "sed-append-change",
    language: "sed",
    aliases: ["sed", "sed"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["AWK", "Bash", "Perl", "Vim script"],
    discriminators: ["a\\ append command", "c\\ change command", "line address regex", "sed editing commands"],
    explanation: "This is sed. This snippet uses a\\ append command, c\\ change command, line address regex as recognizable fingerprints.",
    code: `/^status=/c\
status=active
/^notes=/a\
updated_by=script`
  }
];

export default sed;
