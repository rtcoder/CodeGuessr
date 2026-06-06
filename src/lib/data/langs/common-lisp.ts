import type { CodeQuestion } from '$lib/types';

const commonLisp: CodeQuestion[] = [
  {
    id: "common-lisp-loop-defpackage",
    language: "Common Lisp",
    aliases: ["common lisp", "common-lisp", "cl", "lisp"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "lisp",
    confusionGroup: ["Clojure", "Scheme", "Racket", "Emacs Lisp"],
    discriminators: ["defpackage/in-package", "defun", "loop macro", "keyword package syntax"],
    explanation: "This is Common Lisp. defpackage, in-package, defun, keyword symbols, and the loop macro are strong Common Lisp fingerprints.",
    code: `(defpackage #:reports
  (:use #:cl))

(in-package #:reports)

(defun active-names (users)
  (loop for user in users
        when (getf user :active)
        collect (string-upcase (getf user :name))))`,
  }
];

export default commonLisp;
