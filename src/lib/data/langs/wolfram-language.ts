import type { CodeQuestion } from '$lib/types';

const wolframLanguage: CodeQuestion[] = [
  {
    id: "wolfram-pattern-rule",
    language: "Wolfram Language",
    aliases: ["wolfram language", "wolfram", "mathematica", "wolfram language"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["MATLAB", "Julia", "R", "APL"],
    discriminators: ["pattern underscore", "replacement rule ->", "Map shorthand /@", "symbolic expression syntax"],
    explanation: "This is Wolfram Language. This snippet uses pattern underscore, replacement rule ->, Map shorthand /@ as recognizable fingerprints.",
    code: `normalize[values_] := (values - Min[values])/(Max[values] - Min[values])
labels = ("score:" <> ToString[#]) & /@ normalize[{10, 20, 35}];`
  },
  {
    id: "wolfram-association-query",
    language: "Wolfram Language",
    aliases: ["wolfram language", "wolfram", "mathematica", "wolfram language"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["MATLAB", "Julia", "R", "APL"],
    discriminators: ["Association <| |>", "Dataset wrapper", "Query expression", "pure function &"],
    explanation: "This is Wolfram Language. This snippet uses Association <| |>, Dataset wrapper, Query expression as recognizable fingerprints.",
    code: `orders = Dataset[{
  <|"id" -> 1, "total" -> 120|>,
  <|"id" -> 2, "total" -> 80|>
}];

orders[Select[#total > 100 &], "id"]`
  },
  {
    id: "wolfram-module-table",
    language: "Wolfram Language",
    aliases: ["wolfram language", "wolfram", "mathematica", "wolfram language"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["MATLAB", "Julia", "R", "APL"],
    discriminators: ["Module local variables", "Table construct", "patterned function definition", "Mathematica capitalized built-ins"],
    explanation: "This is Wolfram Language. This snippet uses Module local variables, Table construct, patterned function definition as recognizable fingerprints.",
    code: `movingAverage[data_, width_] := Module[{windows},
  windows = Partition[data, width, 1];
  Mean /@ windows
]`
  }
];

export default wolframLanguage;
