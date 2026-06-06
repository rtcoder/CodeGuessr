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
  },
  {
    id: "actionscript-vector-dictionary",
    language: "ActionScript",
    aliases: ["actionscript","actionscript 3","as3"],
    difficulty: "hard",
    category: "web",
    quizSuitability: "excellent",
    highlightLanguage: "actionscript",
    confusionGroup: ["Haxe","JavaScript","TypeScript","Java"],
    discriminators: ["Vector.<T>","Dictionary weak keys","for each loop","typed local variables"],
    explanation: "This is ActionScript. This snippet uses a distinct ActionScript idiom: Vector.<T>, Dictionary weak keys, for each loop.",
    code: `package telemetry {
  import flash.utils.Dictionary;

  public final class SessionStore {
    private const sessions:Dictionary = new Dictionary(true);

    public function remember(owner:Object, ids:Vector.<String>):void {
      for each (var id:String in ids) {
        sessions[owner] = id;
      }
    }
  }
}`,
  },
  {
    id: "actionscript-timer-event-dispatch",
    language: "ActionScript",
    aliases: ["actionscript","actionscript 3","as3"],
    difficulty: "hard",
    category: "web",
    quizSuitability: "excellent",
    highlightLanguage: "actionscript",
    confusionGroup: ["Haxe","JavaScript","TypeScript","Java"],
    discriminators: ["flash.utils.Timer","TimerEvent.TIMER","dispatchEvent","override-style event workflow"],
    explanation: "This is ActionScript. This snippet uses a distinct ActionScript idiom: flash.utils.Timer, TimerEvent.TIMER, dispatchEvent.",
    code: `package jobs {
  import flash.events.EventDispatcher;
  import flash.events.TimerEvent;
  import flash.utils.Timer;

  public class Poller extends EventDispatcher {
    private var timer:Timer = new Timer(250);

    public function Poller() {
      timer.addEventListener(TimerEvent.TIMER, tick);
      timer.start();
    }

    private function tick(event:TimerEvent):void {
      dispatchEvent(event.clone());
    }
  }
}`,
  }
];

export default actionscript;
