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
  },
  {
    id: "scheme-callcc",
    language: "Scheme",
    aliases: ["scheme","scm"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "scheme",
    confusionGroup: ["Common Lisp","Racket","Clojure","Standard ML"],
    discriminators: ["call/cc","lambda continuation","for-each","early exit pattern"],
    explanation: "This is Scheme. This snippet uses a distinct Scheme idiom: call/cc, lambda continuation, for-each.",
    code: `(define (first-match pred items)
  (call/cc
    (lambda (return)
      (for-each (lambda (item)
                  (if (pred item) (return item)))
                items)
      #f)))`,
  },
  {
    id: "scheme-tail-recursion",
    language: "Scheme",
    aliases: ["scheme","scm"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "scheme",
    confusionGroup: ["Common Lisp","Racket","Clojure","Standard ML"],
    discriminators: ["named let","tail recursion","null? predicate","cdr traversal"],
    explanation: "This is Scheme. This snippet uses a distinct Scheme idiom: named let, tail recursion, null? predicate.",
    code: `(define (sum xs)
  (let loop ((rest xs) (total 0))
    (if (null? rest)
        total
        (loop (cdr rest) (+ total (car rest))))))`,
  }
];

export default scheme;
