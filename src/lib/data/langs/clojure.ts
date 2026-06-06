import type { CodeQuestion } from '$lib/types';

const clojure: CodeQuestion[] = [
  {
    id: "clojure-threading-map",
    language: "Clojure",
    aliases: ["clojure", "clj"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clojure",
    confusionGroup: ["Common Lisp", "Scheme", "Racket", "Elixir"],
    discriminators: ["ns declaration", "threading macro ->>", "keyword lookup", "anonymous function shorthand"],
    explanation: "This is Clojure. ns, ->> threading, keyword-as-function lookup, vectors/maps, and #(%) shorthand are Clojure fingerprints.",
    code: `(ns app.users
  (:require [clojure.string :as str]))

(defn active-labels [users]
  (->> users
       (filter :active?)
       (map #(str (:name %) " <" (:email %) ">"))
       (map str/lower-case)))`,
  },
  {
    id: "clojure-multimethod",
    language: "Clojure",
    aliases: ["clojure","clj"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clojure",
    confusionGroup: ["Common Lisp","Scheme","Racket","Elixir"],
    discriminators: ["defmulti","defmethod","keyword dispatch","map destructuring"],
    explanation: "This is Clojure. This snippet uses a distinct Clojure idiom: defmulti, defmethod, keyword dispatch.",
    code: `(ns billing.events)

(defmulti handle :type)

(defmethod handle :paid [{:keys [id amount]}]
  {:receipt id :captured amount})

(defmethod handle :default [event]
  {:ignored (:type event)})`,
  },
  {
    id: "clojure-transducer",
    language: "Clojure",
    aliases: ["clojure","clj"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clojure",
    confusionGroup: ["Common Lisp","Scheme","Racket","Elixir"],
    discriminators: ["comp transducer","map/filter functions","into with transducer","keyword-as-function"],
    explanation: "This is Clojure. This snippet uses a distinct Clojure idiom: comp transducer, map/filter functions, into with transducer.",
    code: `(def active-names
  (comp
    (filter :active)
    (map :name)))

(into [] active-names users)`,
  }
];

export default clojure;
