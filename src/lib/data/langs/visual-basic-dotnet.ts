import type { CodeQuestion } from '$lib/types';

const visualBasicDotnet: CodeQuestion[] = [
  {
    id: "vbnet-linq-async",
    language: "Visual Basic .NET",
    aliases: ["visual basic .net", "vb.net", "vbnet"],
    difficulty: "hard",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "vbnet",
    confusionGroup: ["C#", "Visual Basic 6", "VBScript", "Delphi/Object Pascal"],
    discriminators: ["Imports System.Linq", "Async Function returning Task", "LINQ query syntax", "End Function"],
    explanation: "This is Visual Basic .NET. Imports, Async Function, Await, LINQ query syntax, and End Function are VB.NET fingerprints.",
    code: `Imports System.Linq
Imports System.Threading.Tasks

Public Async Function ActiveNamesAsync(users As IEnumerable(Of User)) As Task(Of List(Of String))
    Dim rows = Await repository.LoadUsersAsync()

    Return (From user In rows
            Where user.IsActive
            Select user.Name).ToList()
End Function`,
  },
  {
    id: "visual-basic-net-property-linq",
    language: "Visual Basic .NET",
    aliases: ["visual basic .net","vb.net","vbnet"],
    difficulty: "hard",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "vbnet",
    confusionGroup: ["C#","Visual Basic 6","VBScript","Delphi/Object Pascal"],
    discriminators: ["Property syntax","Iterator Function","Yield keyword","LINQ Where call"],
    explanation: "This is Visual Basic .NET. This snippet uses a distinct Visual Basic .NET idiom: Property syntax, Iterator Function, Yield keyword.",
    code: `Public Iterator Function ActiveNames(users As IEnumerable(Of User)) As IEnumerable(Of String)
    For Each user In users.Where(Function(item) item.Active)
        Yield user.Name
    Next
End Function`,
  },
  {
    id: "visual-basic-net-select-case",
    language: "Visual Basic .NET",
    aliases: ["visual basic .net","vb.net","vbnet"],
    difficulty: "hard",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "vbnet",
    confusionGroup: ["C#","Visual Basic 6","VBScript","Delphi/Object Pascal"],
    discriminators: ["Select Case block","Async Function","Await keyword","Task(Of T) generic"],
    explanation: "This is Visual Basic .NET. This snippet uses a distinct Visual Basic .NET idiom: Select Case block, Async Function, Await keyword.",
    code: `Public Async Function LabelAsync(id As String) As Task(Of String)
    Dim status = Await LoadStatusAsync(id)
    Select Case status
        Case "paid"
            Return "receipt"
        Case Else
            Return "pending"
    End Select
End Function`,
  }
];

export default visualBasicDotnet;
