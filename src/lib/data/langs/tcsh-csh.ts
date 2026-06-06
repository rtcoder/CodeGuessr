import type { CodeQuestion } from '$lib/types';

const tcshCsh: CodeQuestion[] = [
  {
    id: "tcsh-set-foreach",
    language: "tcsh/csh",
    aliases: ["tcsh/csh", "tcsh", "csh", "c shell"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["fish", "Bash", "Batch", "PowerShell"],
    discriminators: ["set variable", "foreach/end loop", "@ arithmetic", "C shell syntax"],
    explanation: "This is tcsh/csh. This snippet uses set variable, foreach/end loop, @ arithmetic as recognizable fingerprints.",
    code: `set total = 0
foreach value (10 20 30)
  @ total = $total + $value
end
echo $total`
  },
  {
    id: "tcsh-alias",
    language: "tcsh/csh",
    aliases: ["tcsh/csh", "tcsh", "csh", "c shell"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["fish", "Bash", "Batch", "PowerShell"],
    discriminators: ["alias command", "history-style bang avoided", "if then endif", "environment variable"],
    explanation: "This is tcsh/csh. This snippet uses alias command, history-style bang avoided, if then endif as recognizable fingerprints.",
    code: `alias deploy 'echo deploying to \!*'
if ($?CODEGUESSR_MODE) then
  echo $CODEGUESSR_MODE
endif`
  },
  {
    id: "tcsh-switch",
    language: "tcsh/csh",
    aliases: ["tcsh/csh", "tcsh", "csh", "c shell"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["fish", "Bash", "Batch", "PowerShell"],
    discriminators: ["switch/case/default", "breaksw", "endsw", "C shell branching"],
    explanation: "This is tcsh/csh. This snippet uses switch/case/default, breaksw, endsw as recognizable fingerprints.",
    code: `switch ($argv[1])
case prod:
  echo production
  breaksw
default:
  echo development
endsw`
  }
];

export default tcshCsh;
