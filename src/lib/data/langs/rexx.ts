import type { CodeQuestion } from '$lib/types';

const rexx: CodeQuestion[] = [
  {
    id: "rexx-parse-arg",
    language: "REXX",
    aliases: ["rexx", "rexx", "oorexx"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["JCL", "BASIC", "Perl", "MUMPS/M"],
    discriminators: ["PARSE ARG", "stem variables", "DO loop", "SAY command"],
    explanation: "This is REXX. This snippet uses PARSE ARG, stem variables, DO loop as recognizable fingerprints.",
    code: `parse arg name count
do i = 1 to count
  say i || ':' || translate(name)
end`
  },
  {
    id: "rexx-signal",
    language: "REXX",
    aliases: ["rexx", "rexx", "oorexx"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["JCL", "BASIC", "Perl", "MUMPS/M"],
    discriminators: ["SIGNAL ON ERROR", "label handler", "condition function", "REXX error flow"],
    explanation: "This is REXX. This snippet uses SIGNAL ON ERROR, label handler, condition function as recognizable fingerprints.",
    code: `signal on error
call riskyTask
exit 0

error:
  say 'failed:' condition('D')
  exit 1`
  },
  {
    id: "rexx-stem",
    language: "REXX",
    aliases: ["rexx", "rexx", "oorexx"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["JCL", "BASIC", "Perl", "MUMPS/M"],
    discriminators: ["stem variable with dot", "DO OVER-like index", "queued() built-in", "compound variable syntax"],
    explanation: "This is REXX. This snippet uses stem variable with dot, DO OVER-like index, queued() built-in as recognizable fingerprints.",
    code: `users.1 = 'api'
users.2 = 'worker'
users.0 = 2
do i = 1 to users.0
  say users.i
end`
  }
];

export default rexx;
