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
  },
  {
    id: "common-lisp-condition-handler",
    language: "Common Lisp",
    aliases: ["common lisp","common-lisp","cl","lisp"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "lisp",
    confusionGroup: ["Clojure","Scheme","Racket","Emacs Lisp"],
    discriminators: ["handler-case","define-condition","restart-style condition system","keyword initarg"],
    explanation: "This is Common Lisp. This snippet uses a distinct Common Lisp idiom: handler-case, define-condition, restart-style condition system.",
    code: `(define-condition missing-user (error)
  ((id :initarg :id :reader missing-user-id)))

(defun load-user (id)
  (handler-case (fetch-user id)
    (missing-user (err)
      (format nil "missing:~A" (missing-user-id err)))))`,
  },
  {
    id: "common-lisp-clos-method",
    language: "Common Lisp",
    aliases: ["common lisp","common-lisp","cl","lisp"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "lisp",
    confusionGroup: ["Clojure","Scheme","Racket","Emacs Lisp"],
    discriminators: ["defclass","defmethod","slot-value","CLOS generic dispatch"],
    explanation: "This is Common Lisp. This snippet uses a distinct Common Lisp idiom: defclass, defmethod, slot-value.",
    code: `(defclass invoice ()
  ((amount :initarg :amount :accessor amount)))

(defmethod render ((item invoice))
  (format nil "$~A" (amount item)))`,
  }
];

export default commonLisp;
