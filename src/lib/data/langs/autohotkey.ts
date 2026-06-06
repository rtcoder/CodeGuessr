import type { CodeQuestion } from '$lib/types';

const autohotkey: CodeQuestion[] = [
  {
    id: "autohotkey-hotkey",
    language: "AutoHotkey",
    aliases: ["autohotkey", "ahk", "autohotkey"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["AutoIt", "Batch", "PowerShell", "VBScript"],
    discriminators: ["hotkey :: syntax", "Send command", "WinActivate", "AHK command style"],
    explanation: "This is AutoHotkey. This snippet uses hotkey :: syntax, Send command, WinActivate as recognizable fingerprints.",
    code: `^!r::
WinActivate, ahk_exe Code.exe
Send, ^+p
return`
  },
  {
    id: "autohotkey-gui",
    language: "AutoHotkey",
    aliases: ["autohotkey", "ahk", "autohotkey"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["AutoIt", "Batch", "PowerShell", "VBScript"],
    discriminators: ["Gui command", "g-label event", "Gui Submit", "percent variable expansion"],
    explanation: "This is AutoHotkey. This snippet uses Gui command, g-label event, Gui Submit as recognizable fingerprints.",
    code: `Gui, Add, Edit, vProjectName
Gui, Add, Button, gSaveProject, Save
Gui, Show
return

SaveProject:
Gui, Submit
MsgBox, Saved %ProjectName%
return`
  },
  {
    id: "autohotkey-object",
    language: "AutoHotkey",
    aliases: ["autohotkey", "ahk", "autohotkey"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["AutoIt", "Batch", "PowerShell", "VBScript"],
    discriminators: ["object literal", "for key,value in object", "A_Index built-in", "expression assignment :="],
    explanation: "This is AutoHotkey. This snippet uses object literal, for key,value in object, A_Index built-in as recognizable fingerprints.",
    code: `counts := {api: 3, worker: 7}
for name, total in counts {
  if (total > 5)
    MsgBox % name " is busy"
}`
  }
];

export default autohotkey;
