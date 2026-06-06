import type { CodeQuestion } from '$lib/types';

const scratch: CodeQuestion[] = [
  {
    id: "scratch-block-script",
    language: "Scratch",
    aliases: ["scratch", "scratch"],
    difficulty: "medium",
    category: "game-dev",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Logo", "Processing", "GDScript", "Blockly"],
    discriminators: ["when green flag clicked", "forever block", "broadcast message", "visual block pseudocode"],
    explanation: "This is Scratch. This snippet uses when green flag clicked, forever block, broadcast message as recognizable fingerprints.",
    code: `when green flag clicked
set [score v] to (0)
forever
  if <touching [coin v]?> then
    change [score v] by (1)
    broadcast [coin collected v]
  end
end`
  },
  {
    id: "scratch-clone-event",
    language: "Scratch",
    aliases: ["scratch", "scratch"],
    difficulty: "medium",
    category: "game-dev",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Logo", "Processing", "GDScript", "Blockly"],
    discriminators: ["when I start as a clone", "create clone of myself", "delete this clone", "Scratch clone lifecycle"],
    explanation: "This is Scratch. This snippet uses when I start as a clone, create clone of myself, delete this clone as recognizable fingerprints.",
    code: `when I receive [spawn enemy v]
create clone of [myself v]

when I start as a clone
repeat until <touching [edge v]?>
  move (5) steps
end
delete this clone`
  },
  {
    id: "scratch-custom-block",
    language: "Scratch",
    aliases: ["scratch", "scratch"],
    difficulty: "medium",
    category: "game-dev",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Logo", "Processing", "GDScript", "Blockly"],
    discriminators: ["define custom block", "ask and wait", "answer reporter", "list block operations"],
    explanation: "This is Scratch. This snippet uses define custom block, ask and wait, answer reporter as recognizable fingerprints.",
    code: `define add player (name)
ask [player name?] and wait
add (answer) to [players v]
say (join [added ] (answer)) for (2) seconds`
  }
];

export default scratch;
