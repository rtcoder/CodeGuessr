import type { CodeQuestion } from '$lib/types';

const ada: CodeQuestion[] = [
  {
    id: "ada-package-tasking",
    language: "Ada",
    aliases: ["ada"],
    difficulty: "hard",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "ada",
    confusionGroup: ["Pascal", "Delphi/Object Pascal", "Fortran", "COBOL"],
    discriminators: ["with/use clauses", "package body", "task type", "Put_Line"],
    explanation: "This is Ada. with/use clauses, package body, task declarations, and Ada.Text_IO.Put_Line-style output are Ada fingerprints.",
    code: `with Ada.Text_IO; use Ada.Text_IO;

package body Workers is
   task type Runner is
      entry Start(Name : String);
   end Runner;

   task body Runner is
   begin
      accept Start(Name : String) do
         Put_Line("Running " & Name);
      end Start;
   end Runner;
end Workers;`,
  }
];

export default ada;
