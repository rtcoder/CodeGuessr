import type { CodeQuestion } from '$lib/types';

const pascal: CodeQuestion[] = [
  {
    id: "pascal-record-writeln",
    language: "Pascal",
    aliases: ["pascal"],
    difficulty: "hard",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "pascal",
    confusionGroup: ["Delphi/Object Pascal", "Ada", "BASIC", "Modula-2"],
    discriminators: ["program header", "record type", "begin/end blocks", "writeln"],
    explanation: "This is Pascal. program headers, record declarations, begin/end blocks, and writeln are classic Pascal clues.",
    code: `program ActiveUsers;

type
  User = record
    Name: string;
    Active: boolean;
  end;

var
  Current: User;

begin
  Current.Name := 'Ada';
  Current.Active := true;
  if Current.Active then
    writeln(Current.Name);
end.`,
  }
];

export default pascal;
