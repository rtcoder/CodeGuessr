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
  }
];

export default hack;
