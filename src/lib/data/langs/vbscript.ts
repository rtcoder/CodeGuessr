import type { CodeQuestion } from '$lib/types';

const vbscript: CodeQuestion[] = [
  {
    id: "vbscript-createobject-dictionary",
    language: "VBScript",
    aliases: ["vbscript", "vbs"],
    difficulty: "hard",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "vbnet",
    confusionGroup: ["Visual Basic 6", "Visual Basic .NET", "Batch", "PowerShell"],
    discriminators: ["CreateObject", "Scripting.Dictionary", "Sub/End Sub", "WScript.Echo"],
    explanation: "This is VBScript. CreateObject, Scripting.Dictionary, WScript.Echo, and Sub/End Sub are VBScript fingerprints.",
    code: `Set users = CreateObject("Scripting.Dictionary")
users.Add "ada", True
users.Add "grace", False

Sub PrintActive(items)
  For Each name In items.Keys
    If items(name) Then
      WScript.Echo name
    End If
  Next
End Sub

PrintActive users`,
  }
];

export default vbscript;
