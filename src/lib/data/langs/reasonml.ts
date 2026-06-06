import type { CodeQuestion } from '$lib/types';

const reasonml: CodeQuestion[] = [
  {
    id: "reasonml-variant-switch",
    language: "ReasonML",
    aliases: ["reasonml", "reason", "reasonml"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["OCaml", "ReScript", "F#", "PureScript"],
    discriminators: ["variant type", "switch expression", "pipe-first operator", "ReasonML braces"],
    explanation: "This is ReasonML. This snippet uses variant type, switch expression, pipe-first operator as recognizable fingerprints.",
    code: `type status =
  | Pending
  | Failed(string)
  | Completed(int);

let label = status =>
  switch (status) {
  | Pending => "pending"
  | Failed(reason) => "failed:" ++ reason
  | Completed(id) => string_of_int(id)
  };`
  },
  {
    id: "reasonml-record-update",
    language: "ReasonML",
    aliases: ["reasonml", "reason", "reasonml"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["OCaml", "ReScript", "F#", "PureScript"],
    discriminators: ["record type", "immutable record update", "option type", "Some constructor"],
    explanation: "This is ReasonML. This snippet uses record type, immutable record update, option type as recognizable fingerprints.",
    code: `type user = {
  id: string,
  name: option(string),
};

let rename = (user, name) => {
  ...user,
  name: Some(name),
};`
  },
  {
    id: "reasonml-module-signature",
    language: "ReasonML",
    aliases: ["reasonml", "reason", "reasonml"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["OCaml", "ReScript", "F#", "PureScript"],
    discriminators: ["module signature", "module implementation", "let binding with type", "ReasonML module syntax"],
    explanation: "This is ReasonML. This snippet uses module signature, module implementation, let binding with type as recognizable fingerprints.",
    code: `module type Store = {
  type t;
  let empty: t;
  let put: (string, t) => t;
};

module Memory: Store = {
  type t = list(string);
  let empty = [];
  let put = (value, store) => [value, ...store];
};`
  }
];

export default reasonml;
