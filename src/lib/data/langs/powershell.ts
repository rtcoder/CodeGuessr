import type { CodeQuestion } from '$lib/types';

const powershell: CodeQuestion[] = [
  {
    id: "powershell-pipeline-objects",
    language: "PowerShell",
    aliases: ["powershell", "pwsh", "ps1"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "powershell",
    confusionGroup: ["Bash", "fish", "Batch", "VBScript"],
    discriminators: ["Get-ChildItem cmdlet", "Where-Object", "ForEach-Object", "$_ pipeline variable"],
    explanation: "This is PowerShell. Verb-Noun cmdlets, object pipelines, Where-Object, ForEach-Object, and $_ are clear fingerprints.",
    code: `$reports = Get-ChildItem -Path ./reports -Filter *.json |
    Where-Object { $_.Length -gt 0 } |
    ForEach-Object {
        $item = Get-Content $_.FullName | ConvertFrom-Json
        [pscustomobject]@{
            Name = $item.name
            Status = $item.status
        }
    }`,
  }
];

export default powershell;
