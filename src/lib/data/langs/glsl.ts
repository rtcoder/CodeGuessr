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
  },
  {
    id: "glsl-uniform-sampler",
    language: "GLSL",
    aliases: ["glsl","opengl shading language"],
    difficulty: "hard",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "glsl",
    confusionGroup: ["HLSL","C","C++","WGSL"],
    discriminators: ["uniform sampler2D","texture function","vec2 varying input","fragment shader output"],
    explanation: "This is GLSL. This snippet uses a distinct GLSL idiom: uniform sampler2D, texture function, vec2 varying input.",
    code: `#version 300 es
precision highp float;

uniform sampler2D atlas;
in vec2 uv;
out vec4 color;

void main() {
  color = texture(atlas, uv);
}`,
  },
  {
    id: "glsl-matrix-transform",
    language: "GLSL",
    aliases: ["glsl","opengl shading language"],
    difficulty: "hard",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "glsl",
    confusionGroup: ["HLSL","C","C++","WGSL"],
    discriminators: ["mat4 uniform","layout(location)","gl_Position","vertex shader main"],
    explanation: "This is GLSL. This snippet uses a distinct GLSL idiom: mat4 uniform, layout(location), gl_Position.",
    code: `#version 330 core
layout(location = 0) in vec3 position;
uniform mat4 modelViewProjection;

void main() {
  gl_Position = modelViewProjection * vec4(position, 1.0);
}`,
  }
];

export default glsl;
