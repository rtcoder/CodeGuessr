import type { CodeQuestion } from '$lib/types';

const batch: CodeQuestion[] = [
  {
    id: "batch-for-delims",
    language: "Batch",
    aliases: ["batch", "batch", "bat", "cmd"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["PowerShell", "VBScript", "Bash", "REXX"],
    discriminators: ["FOR /F loop", "delims option", "percent variables", "cmd.exe syntax"],
    explanation: "This is Batch. This snippet uses FOR /F loop, delims option, percent variables as recognizable fingerprints.",
    code: `@echo off
for /f "tokens=1,2 delims=," %%A in (orders.csv) do (
  echo customer=%%A total=%%B
)`
  },
  {
    id: "batch-setlocal",
    language: "Batch",
    aliases: ["batch", "batch", "bat", "cmd"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["PowerShell", "VBScript", "Bash", "REXX"],
    discriminators: ["setlocal enabledelayedexpansion", "!variable! expansion", "IF comparison", "GOTO label"],
    explanation: "This is Batch. This snippet uses setlocal enabledelayedexpansion, !variable! expansion, IF comparison as recognizable fingerprints.",
    code: `@echo off
setlocal enabledelayedexpansion
set total=0
for %%N in (1 2 3) do (
  set /a total+=%%N
)
echo !total!`
  },
  {
    id: "batch-choice-errorlevel",
    language: "Batch",
    aliases: ["batch", "batch", "bat", "cmd"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["PowerShell", "VBScript", "Bash", "REXX"],
    discriminators: ["CHOICE command", "ERRORLEVEL checks", "CALL label", "EXIT /B"],
    explanation: "This is Batch. This snippet uses CHOICE command, ERRORLEVEL checks, CALL label as recognizable fingerprints.",
    code: `choice /c YN /m "Deploy?"
if errorlevel 2 exit /b 1
call :deploy
exit /b 0

:deploy
echo deploying
exit /b 0`
  }
];

export default batch;
