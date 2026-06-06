import type { CodeQuestion } from '$lib/types';

const racket: CodeQuestion[] = [
  {
    id: "racket-hash-for-list",
    language: "Racket",
    aliases: ["racket", "rkt"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "racket",
    confusionGroup: ["Scheme", "Common Lisp", "Clojure", "Emacs Lisp"],
    discriminators: ["#lang racket", "for/list comprehension", "hash-ref", "keyword-style predicates"],
    explanation: "This is Racket. #lang racket, for/list, hash-ref, and Racket module syntax distinguish it from generic Scheme.",
    code: `#lang racket

(define (active-labels users)
  (for/list ([user users]
             #:when (hash-ref user 'active? #f))
    (format "~a <~a>"
            (hash-ref user 'name)
            (hash-ref user 'email))))`,
  }
];

export default racket;
