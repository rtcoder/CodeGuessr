import type { CodeQuestion } from '$lib/types';

const elixir: CodeQuestion[] = [
  {
    id: "elixir-pipe-pattern",
    language: "Elixir",
    aliases: ["elixir", "ex"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "elixir",
    confusionGroup: ["Erlang", "Ruby", "Clojure", "F#"],
    discriminators: ["defmodule", "pipe operator", "pattern-matched function heads", "Enum module"],
    explanation: "This is Elixir. defmodule, the pipe operator, atom tuples, match?, and Enum pipelines are characteristic Elixir features.",
    code: `defmodule AuditTrail do
  def summarize(events) do
    events
    |> Enum.filter(&match?({:ok, _}, &1))
    |> Enum.map(fn {:ok, event} -> event.actor end)
    |> Enum.frequencies()
  end
end`,
  },
  {
    id: "elixir-with-expression",
    language: "Elixir",
    aliases: ["elixir","ex"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "elixir",
    confusionGroup: ["Erlang","Ruby","Clojure","F#"],
    discriminators: ["with expression","<- pattern matching","tagged tuple convention","else branch"],
    explanation: "This is Elixir. This snippet uses a distinct Elixir idiom: with expression, <- pattern matching, tagged tuple convention.",
    code: `def create(params) do
  with {:ok, user} <- validate(params),
       {:ok, saved} <- Repo.insert(user) do
    {:ok, saved.id}
  else
    {:error, reason} -> {:error, reason}
  end
end`,
  },
  {
    id: "elixir-protocol",
    language: "Elixir",
    aliases: ["elixir","ex"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "elixir",
    confusionGroup: ["Erlang","Ruby","Clojure","F#"],
    discriminators: ["defprotocol","defimpl","struct literal","Elixir protocol dispatch"],
    explanation: "This is Elixir. This snippet uses a distinct Elixir idiom: defprotocol, defimpl, struct literal.",
    code: `defprotocol Slug do
  def to_slug(value)
end

defimpl Slug, for: Atom do
  def to_slug(value), do: Atom.to_string(value)
end`,
  }
];

export default elixir;
