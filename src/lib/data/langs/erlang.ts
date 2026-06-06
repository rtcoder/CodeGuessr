import type { CodeQuestion } from '$lib/types';

const erlang: CodeQuestion[] = [
  {
    id: "erlang-gen-server-call",
    language: "Erlang",
    aliases: ["erlang", "erl"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "erlang",
    confusionGroup: ["Elixir", "Prolog", "Haskell", "Mercury"],
    discriminators: ["-module attribute", "-behaviour(gen_server)", "atoms", "pattern-matched function clauses"],
    explanation: "This is Erlang. -module attributes, gen_server behaviour, atoms, tuples, and function clauses ending with periods identify it.",
    code: `-module(counter).
-behaviour(gen_server).

handle_call(increment, _From, State) ->
    NewState = State + 1,
    {reply, {ok, NewState}, NewState};

handle_call(get, _From, State) ->
    {reply, State, State}.`,
  }
];

export default erlang;
