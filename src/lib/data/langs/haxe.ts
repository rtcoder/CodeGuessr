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
  },
  {
    id: "haxe-abstract-type",
    language: "Haxe",
    aliases: ["haxe","hx"],
    difficulty: "hard",
    category: "web",
    quizSuitability: "excellent",
    highlightLanguage: "haxe",
    confusionGroup: ["ActionScript","TypeScript","JavaScript","Dart"],
    discriminators: ["abstract type","from/to conversion","inline function","Haxe metadata-like syntax"],
    explanation: "This is Haxe. This snippet uses a distinct Haxe idiom: abstract type, from/to conversion, inline function.",
    code: `abstract UserId(String) from String to String {
  public inline function key():String {
    return "user:" + this;
  }
}`,
  },
  {
    id: "haxe-enum-pattern",
    language: "Haxe",
    aliases: ["haxe","hx"],
    difficulty: "hard",
    category: "web",
    quizSuitability: "excellent",
    highlightLanguage: "haxe",
    confusionGroup: ["ActionScript","TypeScript","JavaScript","Dart"],
    discriminators: ["enum declaration","switch over enum","case with payload","static function"],
    explanation: "This is Haxe. This snippet uses a distinct Haxe idiom: enum declaration, switch over enum, case with payload.",
    code: `enum Result<T> {
  Ok(value:T);
  Error(message:String);
}

class Render {
  static function label(result:Result<Int>):String {
    return switch result {
      case Ok(value): Std.string(value);
      case Error(message): message;
    }
  }
}`,
  }
];

export default haxe;
