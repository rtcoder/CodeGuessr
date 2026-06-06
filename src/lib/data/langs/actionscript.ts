import type { CodeQuestion } from '$lib/types';

const actionscript: CodeQuestion[] = [
  {
    id: "actionscript-package-event",
    language: "ActionScript",
    aliases: ["actionscript", "actionscript 3", "as3"],
    difficulty: "hard",
    category: "web",
    quizSuitability: "excellent",
    highlightLanguage: "actionscript",
    confusionGroup: ["Haxe", "JavaScript", "TypeScript", "Java"],
    discriminators: ["package block", "import flash.events", "class extends Sprite", "function event handler with :void"],
    explanation: "This is ActionScript. Flash imports, package blocks, Sprite inheritance, and typed function signatures identify AS3.",
    code: `package {
  import flash.display.Sprite;
  import flash.events.MouseEvent;

  public class SaveButton extends Sprite {
    public function SaveButton() {
      addEventListener(MouseEvent.CLICK, onClick);
    }

    private function onClick(event:MouseEvent):void {
      trace("saved");
    }
  }
}`,
  }
];

export default actionscript;
