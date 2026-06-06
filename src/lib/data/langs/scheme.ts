import type { CodeQuestion } from '$lib/types';

const scheme: CodeQuestion[] = [
  {
    id: "scheme-letrec-cond",
    language: "Scheme",
    aliases: ["scheme", "scm"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "scheme",
    confusionGroup: ["Common Lisp", "Racket", "Clojure", "Standard ML"],
    discriminators: ["define function form", "letrec", "cond", "pair recursion with car/cdr"],
    explanation: "This is Scheme. define, letrec, cond, and car/cdr list recursion are classic Scheme fingerprints.",
    code: `(define (active-names users)
  (letrec ((collect
            (lambda (items)
              (cond
                ((null? items) '())
                ((active? (car items))
                 (cons (name (car items)) (collect (cdr items))))
                (else (collect (cdr items)))))))
    (collect users)))`,
  }
];

export default scheme;
