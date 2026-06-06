import type { CodeQuestion } from '$lib/types';

const hack: CodeQuestion[] = [
  {
    id: "hack-shapes-vec",
    language: "Hack",
    aliases: ["hack", "hacklang"],
    difficulty: "hard",
    category: "web",
    quizSuitability: "excellent",
    highlightLanguage: "php",
    confusionGroup: ["PHP", "TypeScript", "JavaScript", "Flow"],
    discriminators: ["<?hh opening tag", "shape type", "vec collection", "async function returning Awaitable"],
    explanation: "This is Hack. The <?hh tag, shape types, vec collections, and Awaitable async functions distinguish it from PHP.",
    code: `<?hh

type UserRow = shape(
  'name' => string,
  'active' => bool,
);

async function active_names(vec<UserRow> $users): Awaitable<vec<string>> {
  return Vec\\map(
    Vec\\filter($users, $user ==> $user['active']),
    $user ==> $user['name'],
  );
}`,
  },
  {
    id: "hack-xhp-component",
    language: "Hack",
    aliases: ["hack","hacklang"],
    difficulty: "hard",
    category: "web",
    quizSuitability: "excellent",
    highlightLanguage: "php",
    confusionGroup: ["PHP","TypeScript","JavaScript","Flow"],
    discriminators: ["<?hh opening tag","XHP class syntax","attribute declaration","children declaration"],
    explanation: "This is Hack. This snippet uses a distinct Hack idiom: <?hh opening tag, XHP class syntax, attribute declaration.",
    code: `<?hh

final xhp class ui:badge extends :x:element {
  attribute string label @required;
  children empty;

  protected async function renderAsync(): Awaitable<:span> {
    return <span class="badge">{$this->:label}</span>;
  }
}`,
  },
  {
    id: "hack-dict-keyset",
    language: "Hack",
    aliases: ["hack","hacklang"],
    difficulty: "hard",
    category: "web",
    quizSuitability: "excellent",
    highlightLanguage: "php",
    confusionGroup: ["PHP","TypeScript","JavaScript","Flow"],
    discriminators: ["dict collection","keyset collection","Hack generics","vec pipeline-style collection literals"],
    explanation: "This is Hack. This snippet uses a distinct Hack idiom: dict collection, keyset collection, Hack generics.",
    code: `<?hh

function index_by_id(vec<shape("id" => string, "role" => string)> $rows): dict<string, string> {
  $roles = dict[];
  foreach ($rows as $row) {
    $roles[$row["id"]] = $row["role"];
  }
  return $roles;
}`,
  }
];

export default hack;
