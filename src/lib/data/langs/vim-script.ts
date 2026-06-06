import type { CodeQuestion } from '$lib/types';

const vimScript: CodeQuestion[] = [
  {
    id: "vimscript-function",
    language: "Vim script",
    aliases: ["vim script", "vimscript", "vim script", "viml"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Emacs Lisp", "Lua", "Bash", "AWK"],
    discriminators: ["function!", "let assignment", "a: argument prefix", "endfunction"],
    explanation: "This is Vim script. This snippet uses function!, let assignment, a: argument prefix as recognizable fingerprints.",
    code: `function! Slug(name) abort
  let l:lower = tolower(a:name)
  return substitute(l:lower, '\\s\\+', '-', 'g')
endfunction`
  },
  {
    id: "vimscript-autocmd",
    language: "Vim script",
    aliases: ["vim script", "vimscript", "vim script", "viml"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Emacs Lisp", "Lua", "Bash", "AWK"],
    discriminators: ["augroup", "autocmd", "setlocal", "Vim event names"],
    explanation: "This is Vim script. This snippet uses augroup, autocmd, setlocal as recognizable fingerprints.",
    code: `augroup codeguessr
  autocmd!
  autocmd FileType typescript setlocal expandtab shiftwidth=2
augroup END`
  },
  {
    id: "vimscript-dictionary",
    language: "Vim script",
    aliases: ["vim script", "vimscript", "vim script", "viml"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Emacs Lisp", "Lua", "Bash", "AWK"],
    discriminators: ["dictionary literal", "for key in keys()", "echo command", "g: global variable"],
    explanation: "This is Vim script. This snippet uses dictionary literal, for key in keys(), echo command as recognizable fingerprints.",
    code: `let g:counts = {'api': 3, 'worker': 7}
for name in keys(g:counts)
  echo name . ':' . g:counts[name]
endfor`
  }
];

export default vimScript;
