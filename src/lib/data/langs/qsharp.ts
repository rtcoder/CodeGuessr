import type { CodeQuestion } from '$lib/types';

const qsharp: CodeQuestion[] = [
  {
    id: "qsharp-operation-qubit",
    language: "Q#",
    aliases: ["q#", "q#", "qsharp", "q sharp"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["F#", "Haskell", "Python", "Julia"],
    discriminators: ["operation keyword", "use qubit allocation", "H gate", "Measure function"],
    explanation: "This is Q#. This snippet uses operation keyword, use qubit allocation, H gate as recognizable fingerprints.",
    code: `operation FlipAndMeasure() : Result {
    use q = Qubit();
    H(q);
    let result = M(q);
    Reset(q);
    return result;
}`
  },
  {
    id: "qsharp-adjoint-controlled",
    language: "Q#",
    aliases: ["q#", "q#", "qsharp", "q sharp"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["F#", "Haskell", "Python", "Julia"],
    discriminators: ["is Adj + Ctl", "within/apply block", "Controlled operation", "quantum functor syntax"],
    explanation: "This is Q#. This snippet uses is Adj + Ctl, within/apply block, Controlled operation as recognizable fingerprints.",
    code: `operation TogglePair(control : Qubit, target : Qubit) : Unit is Adj + Ctl {
    within {
        H(target);
    } apply {
        Controlled X([control], target);
    }
}`
  },
  {
    id: "qsharp-namespace-open",
    language: "Q#",
    aliases: ["q#", "q#", "qsharp", "q sharp"],
    difficulty: "insane",
    category: "academic",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["F#", "Haskell", "Python", "Julia"],
    discriminators: ["namespace declaration", "open Microsoft.Quantum.*", "@EntryPoint attribute", "Q# entry point"],
    explanation: "This is Q#. This snippet uses namespace declaration, open Microsoft.Quantum.*, @EntryPoint attribute as recognizable fingerprints.",
    code: `namespace Demo {
    open Microsoft.Quantum.Diagnostics;

    @EntryPoint()
    operation Main() : Unit {
        Message("quantum diagnostics ready");
    }
}`
  }
];

export default qsharp;
