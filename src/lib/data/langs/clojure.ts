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
  }
];

export default clojure;
