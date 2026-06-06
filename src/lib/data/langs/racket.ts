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
  },
  {
    id: "racket-match-struct",
    language: "Racket",
    aliases: ["racket","rkt"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "racket",
    confusionGroup: ["Scheme","Common Lisp","Clojure","Emacs Lisp"],
    discriminators: ["struct declaration","match expression","transparent option","list pattern"],
    explanation: "This is Racket. This snippet uses a distinct Racket idiom: struct declaration, match expression, transparent option.",
    code: `#lang racket

(struct invoice (id amount) #:transparent)

(define (label item)
  (match item
    [(invoice id amount) (format "~a:~a" id amount)]))`,
  },
  {
    id: "racket-contract",
    language: "Racket",
    aliases: ["racket","rkt"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "racket",
    confusionGroup: ["Scheme","Common Lisp","Clojure","Emacs Lisp"],
    discriminators: ["provide/contract","-> contract","define function","positive-integer? predicate"],
    explanation: "This is Racket. This snippet uses a distinct Racket idiom: provide/contract, -> contract, define function.",
    code: `#lang racket

(provide/contract
 [double (-> positive-integer? positive-integer?)])

(define (double value)
  (* value 2))`,
  }
];

export default racket;
