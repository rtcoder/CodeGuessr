import type { CodeQuestion } from '$lib/types';

const sas: CodeQuestion[] = [
  {
    id: "sas-data-step",
    language: "SAS",
    aliases: ["sas", "sas"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["R", "Stata", "SPSS", "SQL"],
    discriminators: ["DATA step", "SET statement", "IF THEN DELETE", "RUN terminator"],
    explanation: "This is SAS. This snippet uses DATA step, SET statement, IF THEN DELETE as recognizable fingerprints.",
    code: `data active_customers;
  set customers;
  if status ne "active" then delete;
  tenure_months = intck("month", created_at, today());
run;`
  },
  {
    id: "sas-proc-sql",
    language: "SAS",
    aliases: ["sas", "sas"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["R", "Stata", "SPSS", "SQL"],
    discriminators: ["PROC SQL", "QUIT terminator", "calculated column", "SAS libref table syntax"],
    explanation: "This is SAS. This snippet uses PROC SQL, QUIT terminator, calculated column as recognizable fingerprints.",
    code: `proc sql;
  create table work.totals as
  select customer_id, sum(amount) as total
  from sales.orders
  group by customer_id
  having calculated total > 1000;
quit;`
  },
  {
    id: "sas-macro",
    language: "SAS",
    aliases: ["sas", "sas"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["R", "Stata", "SPSS", "SQL"],
    discriminators: ["%macro definition", "macro variable &name", "%do loop", "%mend terminator"],
    explanation: "This is SAS. This snippet uses %macro definition, macro variable &name, %do loop as recognizable fingerprints.",
    code: `%macro export_year(year);
  data report_&year;
    set orders;
    where year(created_at) = &year;
  run;
%mend export_year;`
  }
];

export default sas;
