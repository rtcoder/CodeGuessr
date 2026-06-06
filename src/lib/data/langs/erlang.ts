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
  },
  {
    id: "erlang-list-comprehension",
    language: "Erlang",
    aliases: ["erlang","erl"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "erlang",
    confusionGroup: ["Elixir","Prolog","Haskell","Mercury"],
    discriminators: ["list comprehension","binary pattern match","guards","atoms"],
    explanation: "This is Erlang. This snippet uses a distinct Erlang idiom: list comprehension, binary pattern match, guards.",
    code: `active_names(Rows) ->
    [Name || #{name := Name, active := true} <- Rows].

decode(<<"ok:", Rest/binary>>) ->
    {ok, Rest};
decode(_) ->
    error.`,
  },
  {
    id: "erlang-supervisor-childspec",
    language: "Erlang",
    aliases: ["erlang","erl"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "erlang",
    confusionGroup: ["Elixir","Prolog","Haskell","Mercury"],
    discriminators: ["supervisor behaviour","child spec map","one_for_one strategy","module attributes"],
    explanation: "This is Erlang. This snippet uses a distinct Erlang idiom: supervisor behaviour, child spec map, one_for_one strategy.",
    code: `-module(app_sup).
-behaviour(supervisor).

init([]) ->
    Child = #{id => worker, start => {worker, start_link, []}},
    {ok, {{one_for_one, 5, 10}, [Child]}}.`,
  }
];

export default erlang;
