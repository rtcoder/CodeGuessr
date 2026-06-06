import type { CodeQuestion } from '$lib/types';

const gamemakerLanguage: CodeQuestion[] = [
  {
    id: "gml-ds-map",
    language: "GameMaker Language",
    aliases: ["gamemaker language", "gml", "gamemaker", "game maker language"],
    difficulty: "medium",
    category: "game-dev",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["JavaScript", "GDScript", "Lua", "Processing"],
    discriminators: ["ds_map_create", "var declaration", "array/map accessor [?]", "GameMaker data structure API"],
    explanation: "This is GameMaker Language. This snippet uses ds_map_create, var declaration, array/map accessor [?] as recognizable fingerprints.",
    code: `var inventory = ds_map_create();
inventory[? "coins"] = 12;
inventory[? "keys"] = 1;

if (inventory[? "coins"] > 10) {
    show_debug_message("bonus unlocked");
}`
  },
  {
    id: "gml-script-function",
    language: "GameMaker Language",
    aliases: ["gamemaker language", "gml", "gamemaker", "game maker language"],
    difficulty: "medium",
    category: "game-dev",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["JavaScript", "GDScript", "Lua", "Processing"],
    discriminators: ["function script syntax", "argument names", "return statement", "instance variable access"],
    explanation: "This is GameMaker Language. This snippet uses function script syntax, argument names, return statement as recognizable fingerprints.",
    code: `function apply_knockback(target, force) {
    target.hspeed = lengthdir_x(force, image_angle);
    target.vspeed = lengthdir_y(force, image_angle);
    return target.hspeed != 0;
}`
  },
  {
    id: "gml-with-instance",
    language: "GameMaker Language",
    aliases: ["gamemaker language", "gml", "gamemaker", "game maker language"],
    difficulty: "medium",
    category: "game-dev",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["JavaScript", "GDScript", "Lua", "Processing"],
    discriminators: ["with statement", "instance_destroy", "collision_rectangle", "GameMaker built-ins"],
    explanation: "This is GameMaker Language. This snippet uses with statement, instance_destroy, collision_rectangle as recognizable fingerprints.",
    code: `var hit = collision_rectangle(x - 8, y - 8, x + 8, y + 8, obj_enemy, false, true);

with (hit) {
    hp -= 1;
    if (hp <= 0) instance_destroy();
}`
  }
];

export default gamemakerLanguage;
