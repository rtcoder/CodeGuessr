import type { CodeQuestion } from '$lib/types';

const processing: CodeQuestion[] = [
  {
    id: "processing-setup-draw",
    language: "Processing",
    aliases: ["processing", "processing", "pde"],
    difficulty: "medium",
    category: "game-dev",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Java", "Arduino/Wiring", "GLSL", "JavaScript"],
    discriminators: ["setup/draw lifecycle", "size() function", "background()", "ellipse() drawing API"],
    explanation: "This is Processing. This snippet uses setup/draw lifecycle, size() function, background() as recognizable fingerprints.",
    code: `void setup() {
  size(640, 360);
}

void draw() {
  background(32);
  ellipse(mouseX, mouseY, 48, 48);
}`
  },
  {
    id: "processing-pvector",
    language: "Processing",
    aliases: ["processing", "processing", "pde"],
    difficulty: "medium",
    category: "game-dev",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Java", "Arduino/Wiring", "GLSL", "JavaScript"],
    discriminators: ["PVector type", "frameCount", "line drawing", "Processing math helpers"],
    explanation: "This is Processing. This snippet uses PVector type, frameCount, line drawing as recognizable fingerprints.",
    code: `PVector origin = new PVector(320, 180);

void draw() {
  float radius = sin(frameCount * 0.05) * 80;
  line(origin.x, origin.y, origin.x + radius, origin.y);
}`
  },
  {
    id: "processing-class-sketch",
    language: "Processing",
    aliases: ["processing", "processing", "pde"],
    difficulty: "medium",
    category: "game-dev",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Java", "Arduino/Wiring", "GLSL", "JavaScript"],
    discriminators: ["class inside sketch", "color type", "rect() call", "no package declaration"],
    explanation: "This is Processing. This snippet uses class inside sketch, color type, rect() call as recognizable fingerprints.",
    code: `class Tile {
  color shade;

  Tile(color shade) {
    this.shade = shade;
  }

  void render(int x, int y) {
    fill(shade);
    rect(x, y, 24, 24);
  }
}`
  }
];

export default processing;
