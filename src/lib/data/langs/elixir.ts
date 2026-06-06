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
  }
];

export default elixir;
