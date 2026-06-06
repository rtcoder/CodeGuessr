import type { CodeQuestion } from '$lib/types';

const autoit: CodeQuestion[] = [
  {
    id: "autoit-func-macro",
    language: "AutoIt",
    aliases: ["autoit", "autoit"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["AutoHotkey", "VBScript", "Batch", "PowerShell"],
    discriminators: ["Func declaration", "EndFunc terminator", "@ScriptDir macro", "ConsoleWrite"],
    explanation: "This is AutoIt. This snippet uses Func declaration, EndFunc terminator, @ScriptDir macro as recognizable fingerprints.",
    code: `Func ConfigPath($name)
    Return @ScriptDir & "\\config\\" & $name & ".ini"
EndFunc

ConsoleWrite(ConfigPath("app"))`
  },
  {
    id: "autoit-gui-loop",
    language: "AutoIt",
    aliases: ["autoit", "autoit"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["AutoHotkey", "VBScript", "Batch", "PowerShell"],
    discriminators: ["GUICreate", "GUIGetMsg loop", "Switch statement", "AutoIt GUI constants"],
    explanation: "This is AutoIt. This snippet uses GUICreate, GUIGetMsg loop, Switch statement as recognizable fingerprints.",
    code: `$window = GUICreate("Status", 240, 120)
$button = GUICtrlCreateButton("Close", 80, 70)
GUISetState(@SW_SHOW)

While 1
    Switch GUIGetMsg()
        Case $button, $GUI_EVENT_CLOSE
            ExitLoop
    EndSwitch
WEnd`
  },
  {
    id: "autoit-array",
    language: "AutoIt",
    aliases: ["autoit", "autoit"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["AutoHotkey", "VBScript", "Batch", "PowerShell"],
    discriminators: ["Local array declaration", "UBound function", "For loop", "dollar-prefixed variables"],
    explanation: "This is AutoIt. This snippet uses Local array declaration, UBound function, For loop as recognizable fingerprints.",
    code: `Local $names[3] = ["api", "worker", "db"]
For $i = 0 To UBound($names) - 1
    ConsoleWrite(StringUpper($names[$i]) & @CRLF)
Next`
  }
];

export default autoit;
