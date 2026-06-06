import { questions } from './data/questions';

const aliases = new Map<string, string>();

for (const [language, names] of languageAliasEntries()) {
  aliases.set(normalize(language), language);
  for (const name of names) {
    aliases.set(normalize(name), language);
  }
}

export function normalize(answer: string) {
  return answer
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[._]/g, '');
}

export function canonicalLanguage(answer: string) {
  return aliases.get(normalize(answer)) ?? answer.trim();
}

export function matchesLanguage(answer: string, expected: string) {
  return canonicalLanguage(answer) === expected;
}

export const availableLanguages = Array.from(new Set(questions.map((question) => question.language))).sort();

function languageAliasEntries() {
  const entries = new Map<string, Set<string>>();

  for (const question of questions) {
    const names = entries.get(question.language) ?? new Set<string>();
    names.add(question.language);

    for (const alias of question.aliases) {
      names.add(alias);
    }

    entries.set(question.language, names);
  }

  return Array.from(entries, ([language, names]) => [language, Array.from(names)] as const);
}
