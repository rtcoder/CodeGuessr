import type { CodeQuestion } from '$lib/types';

const glsl: CodeQuestion[] = [
  {
    id: "glsl-fragment-shader",
    language: "GLSL",
    aliases: ["glsl", "opengl shading language"],
    difficulty: "hard",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "glsl",
    confusionGroup: ["HLSL", "C", "C++", "WGSL"],
    discriminators: ["#version shader directive", "in/out shader variables", "vec2/vec3 types", "fragColor output"],
    explanation: "This is GLSL. #version, vec types, shader in/out variables, and fragment-color output are GLSL fingerprints.",
    code: `#version 330 core

in vec2 uv;
out vec4 fragColor;

uniform sampler2D image;

void main() {
    vec3 color = texture(image, uv).rgb;
    fragColor = vec4(pow(color, vec3(1.0 / 2.2)), 1.0);
}`,
  }
];

export default glsl;
