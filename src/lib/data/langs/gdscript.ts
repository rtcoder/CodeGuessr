import type { CodeQuestion } from '$lib/types';

const gdscript: CodeQuestion[] = [
  {
    id: "gdscript-node-ready",
    language: "GDScript",
    aliases: ["gdscript", "gdscript", "godot script"],
    difficulty: "medium",
    category: "game-dev",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Python", "Lua", "GameMaker Language", "Ruby"],
    discriminators: ["extends Node2D", "_ready callback", "@onready variable", "Godot node path"],
    explanation: "This is GDScript. This snippet uses extends Node2D, _ready callback, @onready variable as recognizable fingerprints.",
    code: `extends Node2D

@onready var label: Label = $CanvasLayer/Label

func _ready() -> void:
    label.text = "loaded"`
  },
  {
    id: "gdscript-signal",
    language: "GDScript",
    aliases: ["gdscript", "gdscript", "godot script"],
    difficulty: "medium",
    category: "game-dev",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Python", "Lua", "GameMaker Language", "Ruby"],
    discriminators: ["signal declaration", "emit signal", "typed function", "snake_case callbacks"],
    explanation: "This is GDScript. This snippet uses signal declaration, emit signal, typed function as recognizable fingerprints.",
    code: `signal health_changed(value: int)

var health: int = 100

func apply_damage(amount: int) -> void:
    health -= amount
    health_changed.emit(health)`
  },
  {
    id: "gdscript-match",
    language: "GDScript",
    aliases: ["gdscript", "gdscript", "godot script"],
    difficulty: "medium",
    category: "game-dev",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Python", "Lua", "GameMaker Language", "Ruby"],
    discriminators: ["match statement", "Vector2 type", "export annotation", "Godot-specific APIs"],
    explanation: "This is GDScript. This snippet uses match statement, Vector2 type, export annotation as recognizable fingerprints.",
    code: `@export var speed: float = 120.0

func direction(input_name: String) -> Vector2:
    match input_name:
        "left":
            return Vector2.LEFT
        "right":
            return Vector2.RIGHT
        _:
            return Vector2.ZERO`
  }
];

export default gdscript;
