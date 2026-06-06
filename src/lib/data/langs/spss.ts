import type { CodeQuestion } from '$lib/types';

const spss: CodeQuestion[] = [
  {
    id: "spss-compute-execute",
    language: "SPSS",
    aliases: ["spss", "spss"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["SAS", "Stata", "R", "SQL"],
    discriminators: ["COMPUTE command", "EXECUTE terminator", "VARIABLE LABELS", "SPSS command syntax"],
    explanation: "This is SPSS. This snippet uses COMPUTE command, EXECUTE terminator, VARIABLE LABELS as recognizable fingerprints.",
    code: `COMPUTE tenure = DATEDIFF($TIME, hired_at, "days").
VARIABLE LABELS tenure "Employee tenure in days".
EXECUTE.`
  },
  {
    id: "spss-recode",
    language: "SPSS",
    aliases: ["spss", "spss"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["SAS", "Stata", "R", "SQL"],
    discriminators: ["RECODE command", "INTO target variable", "VALUE LABELS", "period terminators"],
    explanation: "This is SPSS. This snippet uses RECODE command, INTO target variable, VALUE LABELS as recognizable fingerprints.",
    code: `RECODE score
  (0 THRU 49 = 0)
  (50 THRU 100 = 1)
  INTO passed.
VALUE LABELS passed 0 "no" 1 "yes".`
  },
  {
    id: "spss-aggregate",
    language: "SPSS",
    aliases: ["spss", "spss"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["SAS", "Stata", "R", "SQL"],
    discriminators: ["AGGREGATE command", "/BREAK subcommand", "/variable = MEAN()", "slash subcommands"],
    explanation: "This is SPSS. This snippet uses AGGREGATE command, /BREAK subcommand, /variable = MEAN() as recognizable fingerprints.",
    code: `AGGREGATE
  /OUTFILE=* MODE=ADDVARIABLES
  /BREAK=department
  /avg_salary = MEAN(salary).`
  }
];

export default spss;
