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
  }
];

export default visualBasicDotnet;
