import type { CodeQuestion } from '$lib/types';

const haxe: CodeQuestion[] = [
  {
    id: "haxe-typedef-switch",
    language: "Haxe",
    aliases: ["haxe", "hx"],
    difficulty: "hard",
    category: "web",
    quizSuitability: "excellent",
    highlightLanguage: "haxe",
    confusionGroup: ["ActionScript", "TypeScript", "JavaScript", "Dart"],
    discriminators: ["typedef structural type", "static function", "switch expression", "trace"],
    explanation: "This is Haxe. typedef structural types, static functions, switch expressions, and trace are Haxe fingerprints.",
    code: `typedef User = {
  final name:String;
  final active:Bool;
}

class Labels {
  static function label(user:User):String {
    return switch user.active {
      case true: '\${user.name} is active';
      case false: '\${user.name} is inactive';
    }
  }
}`,
  }
];

export default haxe;
