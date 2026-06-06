import type { CodeQuestion } from '$lib/types';

const hlsl: CodeQuestion[] = [
  {
    id: "hlsl-cbuffer",
    language: "HLSL",
    aliases: ["hlsl", "hlsl", "high level shader language"],
    difficulty: "insane",
    category: "hardware",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["GLSL", "WGSL", "C", "CUDA"],
    discriminators: ["cbuffer block", "SV_Position semantic", "float4 type", "mul matrix call"],
    explanation: "This is HLSL. This snippet uses cbuffer block, SV_Position semantic, float4 type as recognizable fingerprints.",
    code: `cbuffer Camera : register(b0) {
  float4x4 viewProjection;
};

float4 main(float3 position : POSITION) : SV_Position {
  return mul(viewProjection, float4(position, 1.0));
}`
  },
  {
    id: "hlsl-texture-sampler",
    language: "HLSL",
    aliases: ["hlsl", "hlsl", "high level shader language"],
    difficulty: "insane",
    category: "hardware",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["GLSL", "WGSL", "C", "CUDA"],
    discriminators: ["Texture2D", "SamplerState", "register(t0)", "SV_Target semantic"],
    explanation: "This is HLSL. This snippet uses Texture2D, SamplerState, register(t0) as recognizable fingerprints.",
    code: `Texture2D albedo : register(t0);
SamplerState linearSampler : register(s0);

float4 ps_main(float2 uv : TEXCOORD0) : SV_Target {
  return albedo.Sample(linearSampler, uv);
}`
  },
  {
    id: "hlsl-structured-buffer",
    language: "HLSL",
    aliases: ["hlsl", "hlsl", "high level shader language"],
    difficulty: "insane",
    category: "hardware",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["GLSL", "WGSL", "C", "CUDA"],
    discriminators: ["StructuredBuffer", "RWStructuredBuffer", "numthreads attribute", "SV_DispatchThreadID"],
    explanation: "This is HLSL. This snippet uses StructuredBuffer, RWStructuredBuffer, numthreads attribute as recognizable fingerprints.",
    code: `StructuredBuffer<float> inputValues : register(t0);
RWStructuredBuffer<float> outputValues : register(u0);

[numthreads(64, 1, 1)]
void cs_main(uint3 id : SV_DispatchThreadID) {
  outputValues[id.x] = inputValues[id.x] * 2.0;
}`
  }
];

export default hlsl;
