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
  },
  {
    id: "vbscript-regexp",
    language: "VBScript",
    aliases: ["vbscript","vbs"],
    difficulty: "hard",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "vbnet",
    confusionGroup: ["Visual Basic 6","Visual Basic .NET","Batch","PowerShell"],
    discriminators: ["New RegExp object","Global property","Execute method","For Each loop"],
    explanation: "This is VBScript. This snippet uses a distinct VBScript idiom: New RegExp object, Global property, Execute method.",
    code: `Set pattern = New RegExp
pattern.Pattern = "\\d+"
pattern.Global = True

For Each match In pattern.Execute("id=42 qty=7")
  WScript.Echo match.Value
Next`,
  },
  {
    id: "vbscript-adodb",
    language: "VBScript",
    aliases: ["vbscript","vbs"],
    difficulty: "hard",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "vbnet",
    confusionGroup: ["Visual Basic 6","Visual Basic .NET","Batch","PowerShell"],
    discriminators: ["ADODB.Connection","CreateObject","On Error Resume Next","Err.Number"],
    explanation: "This is VBScript. This snippet uses a distinct VBScript idiom: ADODB.Connection, CreateObject, On Error Resume Next.",
    code: `On Error Resume Next
Set db = CreateObject("ADODB.Connection")
db.Open connectionString

If Err.Number <> 0 Then
  WScript.Echo Err.Description
End If`,
  }
];

export default vbscript;
