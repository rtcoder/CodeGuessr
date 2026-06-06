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
  },
  {
    id: "ada-protected-object",
    language: "Ada",
    aliases: ["ada"],
    difficulty: "hard",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "ada",
    confusionGroup: ["Pascal","Delphi/Object Pascal","Fortran","COBOL"],
    discriminators: ["protected type","entry barrier","procedure body","Ada rendezvous-style synchronization"],
    explanation: "This is Ada. This snippet uses a distinct Ada idiom: protected type, entry barrier, procedure body.",
    code: `protected type Mailbox is
  entry Take(Item : out Integer) when Ready;
  procedure Put(Item : in Integer);
private
  Value : Integer := 0;
  Ready : Boolean := False;
end Mailbox;`,
  },
  {
    id: "ada-generic-package",
    language: "Ada",
    aliases: ["ada"],
    difficulty: "hard",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "ada",
    confusionGroup: ["Pascal","Delphi/Object Pascal","Fortran","COBOL"],
    discriminators: ["generic package","formal type parameter","package instantiation","Ada strong typing"],
    explanation: "This is Ada. This snippet uses a distinct Ada idiom: generic package, formal type parameter, package instantiation.",
    code: `generic
  type Element is private;
package Stacks is
  procedure Push(Item : Element);
  function Pop return Element;
end Stacks;

package Integer_Stacks is new Stacks(Integer);`,
  }
];

export default ada;
