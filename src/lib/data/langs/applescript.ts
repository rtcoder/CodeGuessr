import type { CodeQuestion } from '$lib/types';

const applescript: CodeQuestion[] = [
  {
    id: "applescript-tell-app",
    language: "AppleScript",
    aliases: ["applescript", "apple script"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["VBScript", "AutoHotkey", "Bash", "PowerShell"],
    discriminators: ["tell application block", "end tell", "set variable to", "AppleScript natural-language syntax"],
    explanation: "This is AppleScript. This snippet uses tell application block, end tell, set variable to as recognizable fingerprints.",
    code: `tell application "Finder"
  set desktopItems to every item of desktop
  repeat with entry in desktopItems
    log name of entry
  end repeat
end tell`
  },
  {
    id: "applescript-handler",
    language: "AppleScript",
    aliases: ["applescript", "apple script"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["VBScript", "AutoHotkey", "Bash", "PowerShell"],
    discriminators: ["on handlerName", "return statement", "list braces", "repeat with"],
    explanation: "This is AppleScript. This snippet uses on handlerName, return statement, list braces as recognizable fingerprints.",
    code: `on joinNames(names)
  set output to ""
  repeat with itemName in names
    set output to output & itemName & ","
  end repeat
  return output
end joinNames`
  },
  {
    id: "applescript-record",
    language: "AppleScript",
    aliases: ["applescript", "apple script"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["VBScript", "AutoHotkey", "Bash", "PowerShell"],
    discriminators: ["record literal", "property access with of", "if then/end if", "missing value"],
    explanation: "This is AppleScript. This snippet uses record literal, property access with of, if then/end if as recognizable fingerprints.",
    code: `set invoice to {id:"A-42", total:120}
if total of invoice > 100 then
  display dialog "large invoice"
end if`
  }
];

export default applescript;
