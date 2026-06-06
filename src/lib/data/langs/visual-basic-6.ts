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
  },
  {
    id: "visual-basic-6-property-let",
    language: "Visual Basic 6",
    aliases: ["visual basic 6","vb6","classic visual basic"],
    difficulty: "hard",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "vbnet",
    confusionGroup: ["Visual Basic .NET","VBScript","Delphi/Object Pascal","PowerShell"],
    discriminators: ["Property Let","Property Get","Private field","End Property"],
    explanation: "This is Visual Basic 6. This snippet uses a distinct Visual Basic 6 idiom: Property Let, Property Get, Private field.",
    code: `Private m_Name As String

Public Property Get Name() As String
    Name = m_Name
End Property

Public Property Let Name(ByVal Value As String)
    m_Name = Value
End Property`,
  },
  {
    id: "visual-basic-6-on-error",
    language: "Visual Basic 6",
    aliases: ["visual basic 6","vb6","classic visual basic"],
    difficulty: "hard",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "vbnet",
    confusionGroup: ["Visual Basic .NET","VBScript","Delphi/Object Pascal","PowerShell"],
    discriminators: ["On Error GoTo","Line label","Resume Next","VB6 error handler style"],
    explanation: "This is Visual Basic 6. This snippet uses a distinct Visual Basic 6 idiom: On Error GoTo, Line label, Resume Next.",
    code: `Private Sub LoadFile(ByVal Path As String)
    On Error GoTo Failed
    Open Path For Input As #1
    Close #1
    Exit Sub
Failed:
    MsgBox Err.Description
End Sub`,
  }
];

export default visualBasic6;
