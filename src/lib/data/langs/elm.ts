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
  },
  {
    id: "elm-json-decoder",
    language: "Elm",
    aliases: ["elm"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "elm",
    confusionGroup: ["PureScript","Haskell","F#","OCaml"],
    discriminators: ["Json.Decode pipeline","Decoder type annotation","field decoder","map2"],
    explanation: "This is Elm. This snippet uses a distinct Elm idiom: Json.Decode pipeline, Decoder type annotation, field decoder.",
    code: `import Json.Decode exposing (Decoder, field, int, map2, string)

type alias User =
    { id : Int, name : String }

userDecoder : Decoder User
userDecoder =
    map2 User
        (field "id" int)
        (field "name" string)`,
  },
  {
    id: "elm-cmd-batch",
    language: "Elm",
    aliases: ["elm"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "elm",
    confusionGroup: ["PureScript","Haskell","F#","OCaml"],
    discriminators: ["Cmd.batch","update function returning tuple","custom Msg constructors","Elm architecture pattern"],
    explanation: "This is Elm. This snippet uses a distinct Elm idiom: Cmd.batch, update function returning tuple, custom Msg constructors.",
    code: `type Msg = Save | Saved String

update msg model =
    case msg of
        Save ->
            ( model, Cmd.batch [ sendSave model, logSave model.id ] )

        Saved id ->
            ( { model | lastSaved = Just id }, Cmd.none )`,
  }
];

export default elm;
