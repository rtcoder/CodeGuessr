import type { CodeQuestion } from '$lib/types';

const stata: CodeQuestion[] = [
  {
    id: "stata-generate-replace",
    language: "Stata",
    aliases: ["stata", "stata"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["R", "SAS", "SPSS", "MATLAB"],
    discriminators: ["generate command", "replace if", "bysort prefix", "Stata command syntax"],
    explanation: "This is Stata. This snippet uses generate command, replace if, bysort prefix as recognizable fingerprints.",
    code: `generate overdue = due_date < today()
replace overdue = 0 if paid_at < .
bysort customer_id: egen total_due = total(amount)`
  },
  {
    id: "stata-program-define",
    language: "Stata",
    aliases: ["stata", "stata"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["R", "SAS", "SPSS", "MATLAB"],
    discriminators: ["program define", "syntax command", "local macro", "end terminator"],
    explanation: "This is Stata. This snippet uses program define, syntax command, local macro as recognizable fingerprints.",
    code: `program define greet
    syntax, Name(string)
    display "hello \`name'"
end`
  },
  {
    id: "stata-regress-predict",
    language: "Stata",
    aliases: ["stata", "stata"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["R", "SAS", "SPSS", "MATLAB"],
    discriminators: ["regress command", "predict residuals", "if qualifier", "twoway plotting syntax"],
    explanation: "This is Stata. This snippet uses regress command, predict residuals, if qualifier as recognizable fingerprints.",
    code: `regress revenue ads spend if quarter >= 2
predict fitted_revenue, xb
twoway scatter revenue fitted_revenue`
  }
];

export default stata;
