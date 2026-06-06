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
  },
  {
    id: "powershell-advanced-function",
    language: "PowerShell",
    aliases: ["powershell","pwsh","ps1"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "powershell",
    confusionGroup: ["Bash","fish","Batch","VBScript"],
    discriminators: ["[CmdletBinding()]","param block","ValueFromPipeline","process block"],
    explanation: "This is PowerShell. This snippet uses a distinct PowerShell idiom: [CmdletBinding()], param block, ValueFromPipeline.",
    code: `function ConvertTo-Slug {
  [CmdletBinding()]
  param([Parameter(ValueFromPipeline)] [string] $InputObject)

  process {
    $InputObject.ToLowerInvariant() -replace "\\s+", "-"
  }
}`,
  },
  {
    id: "powershell-hashtable-splatting",
    language: "PowerShell",
    aliases: ["powershell","pwsh","ps1"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "powershell",
    confusionGroup: ["Bash","fish","Batch","VBScript"],
    discriminators: ["hashtable literal","splatting with @","New-Item cmdlet","PowerShell named parameters"],
    explanation: "This is PowerShell. This snippet uses a distinct PowerShell idiom: hashtable literal, splatting with @, New-Item cmdlet.",
    code: `$options = @{
  Path = "build"
  ItemType = "Directory"
  Force = $true
}

New-Item @options`,
  }
];

export default powershell;
