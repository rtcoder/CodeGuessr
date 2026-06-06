import type { CodeQuestion } from '$lib/types';

const delphiObjectPascal: CodeQuestion[] = [
  {
    id: "delphi-unit-vcl-form",
    language: "Delphi/Object Pascal",
    aliases: ["delphi", "object pascal", "delphi/object pascal"],
    difficulty: "hard",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "pascal",
    confusionGroup: ["Pascal", "Ada", "Visual Basic .NET", "C#"],
    discriminators: ["unit/interface/implementation", "uses Vcl.Forms", "TMainForm = class(TForm)", "procedure method syntax"],
    explanation: "This is Delphi/Object Pascal. unit/interface/implementation sections and VCL classes like TForm distinguish it from classic Pascal.",
    code: `unit MainForm;

interface

uses
  System.SysUtils, Vcl.Forms, Vcl.StdCtrls;

type
  TMainForm = class(TForm)
    Button1: TButton;
    procedure Button1Click(Sender: TObject);
  end;

implementation

procedure TMainForm.Button1Click(Sender: TObject);
begin
  ShowMessage('Saved');
end;

end.`,
  }
];

export default delphiObjectPascal;
