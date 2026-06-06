import type { CodeQuestion } from '$lib/types';

const apl: CodeQuestion[] = [
  {
    id: "apl-reduce-scan",
    language: "APL",
    aliases: ["apl", "apl"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["J", "K", "MATLAB", "Julia"],
    discriminators: ["+/ reduction", "⍳ index generator", "⍴ reshape", "APL glyph syntax"],
    explanation: "This is APL. This snippet uses +/ reduction, ⍳ index generator, ⍴ reshape as recognizable fingerprints.",
    code: `scores ← 3 4⍴⍳12
totals ← +/scores
averages ← totals ÷ ⍴scores[1;]`
  },
  {
    id: "apl-dfn",
    language: "APL",
    aliases: ["apl", "apl"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["J", "K", "MATLAB", "Julia"],
    discriminators: ["dfn braces", "⍵ right argument", "⍺ left argument", "⍨ commute/operator glyph"],
    explanation: "This is APL. This snippet uses dfn braces, ⍵ right argument, ⍺ left argument as recognizable fingerprints.",
    code: `Normalize ← { (⍵ - ⌊/⍵) ÷ (⌈/⍵) - ⌊/⍵ }
Discount ← { ⍺ × 1 - ⍵ }
prices ← 0.2 Discount 100 250 400`
  },
  {
    id: "apl-each",
    language: "APL",
    aliases: ["apl", "apl"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["J", "K", "MATLAB", "Julia"],
    discriminators: ["Each operator ¨", "membership ∊", "compress /", "nested vector"],
    explanation: "This is APL. This snippet uses Each operator ¨, membership ∊, compress / as recognizable fingerprints.",
    code: `names ← 'api' 'worker' 'db'
mask ← names ∊ 'api' 'db'
selected ← mask / names
lengths ← ⍴¨selected`
  }
];

export default apl;
