import type { CodeQuestion } from '$lib/types';

const visualBasic6: CodeQuestion[] = [
  {
    id: "vb6-form-event",
    language: "Visual Basic 6",
    aliases: ["visual basic 6", "vb6", "classic visual basic"],
    difficulty: "hard",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "vbnet",
    confusionGroup: ["Visual Basic .NET", "VBScript", "Delphi/Object Pascal", "PowerShell"],
    discriminators: ["Private Sub Button_Click event", "Dim ... As String", "MsgBox", "End Sub"],
    explanation: "This is Visual Basic 6. Form event handlers like Command1_Click, Dim As declarations, MsgBox, and End Sub are VB6 clues.",
    code: `Private Sub Command1_Click()
    Dim label As String

    If chkActive.Value = 1 Then
        label = txtName.Text & " is active"
    Else
        label = txtName.Text & " is inactive"
    End If

    MsgBox label
End Sub`,
  }
];

export default visualBasic6;
