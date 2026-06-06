import type { CodeQuestion } from '$lib/types';

const tcl: CodeQuestion[] = [
  {
    id: "tcl-proc-list",
    language: "Tcl",
    aliases: ["tcl", "tcl", "tool command language"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Lua", "Bash", "Python", "Perl"],
    discriminators: ["proc declaration", "braced script blocks", "foreach command", "list append lappend"],
    explanation: "This is Tcl. This snippet uses proc declaration, braced script blocks, foreach command as recognizable fingerprints.",
    code: `proc activeNames {users} {
  set result {}
  foreach user $users {
    if {[dict get $user active]} {
      lappend result [dict get $user name]
    }
  }
  return $result
}`
  },
  {
    id: "tcl-dict-update",
    language: "Tcl",
    aliases: ["tcl", "tcl", "tool command language"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Lua", "Bash", "Python", "Perl"],
    discriminators: ["dict update", "variable substitution $name", "puts command", "Tcl command syntax"],
    explanation: "This is Tcl. This snippet uses dict update, variable substitution $name, puts command as recognizable fingerprints.",
    code: `set counts [dict create api 3 worker 7]
dict update counts api total {
  incr total
}
puts $counts`
  },
  {
    id: "tcl-tk-button",
    language: "Tcl",
    aliases: ["tcl", "tcl", "tool command language"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Lua", "Bash", "Python", "Perl"],
    discriminators: ["package require Tk", "button command", "-command option", "pack geometry manager"],
    explanation: "This is Tcl. This snippet uses package require Tk, button command, -command option as recognizable fingerprints.",
    code: `package require Tk
button .save -text "Save" -command {
  puts "saved"
}
pack .save`
  }
];

export default tcl;
