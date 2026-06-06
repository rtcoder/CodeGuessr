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
  },
  {
    id: "pascal-set-type",
    language: "Pascal",
    aliases: ["pascal"],
    difficulty: "hard",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "pascal",
    confusionGroup: ["Delphi/Object Pascal","Ada","BASIC","Modula-2"],
    discriminators: ["set of enum","include procedure","in operator","Pascal type block"],
    explanation: "This is Pascal. This snippet uses a distinct Pascal idiom: set of enum, include procedure, in operator.",
    code: `type
  TPermission = (ReadAccess, WriteAccess, ExecuteAccess);
  TPermissions = set of TPermission;

var Rights: TPermissions;
begin
  Rights := [ReadAccess];
  Include(Rights, WriteAccess);
end.`,
  },
  {
    id: "pascal-procedure-var-param",
    language: "Pascal",
    aliases: ["pascal"],
    difficulty: "hard",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "pascal",
    confusionGroup: ["Delphi/Object Pascal","Ada","BASIC","Modula-2"],
    discriminators: ["procedure declaration","var parameter","array indexing","for loop"],
    explanation: "This is Pascal. This snippet uses a distinct Pascal idiom: procedure declaration, var parameter, array indexing.",
    code: `procedure Swap(var A, B: Integer);
var Temp: Integer;
begin
  Temp := A;
  A := B;
  B := Temp;
end;`,
  }
];

export default pascal;
