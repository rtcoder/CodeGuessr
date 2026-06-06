import type { CodeQuestion } from '$lib/types';

const elm: CodeQuestion[] = [
  {
    id: "elm-update-msg",
    language: "Elm",
    aliases: ["elm"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "elm",
    confusionGroup: ["PureScript", "Haskell", "F#", "OCaml"],
    discriminators: ["module exposing", "custom Msg type", "update : Msg -> Model -> Model", "record update syntax"],
    explanation: "This is Elm. module exposing, Msg model/update architecture, type annotations, and record update syntax are Elm fingerprints.",
    code: `module Counter exposing (Model, Msg(..), update)

type alias Model =
    { count : Int }

type Msg
    = Increment
    | Reset

update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment ->
            { model | count = model.count + 1 }

        Reset ->
            { model | count = 0 }`,
  }
];

export default elm;
