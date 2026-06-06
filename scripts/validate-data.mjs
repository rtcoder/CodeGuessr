import { questions } from '../src/lib/data/questions.ts';

const difficulties = new Set(['easy', 'medium', 'hard', 'insane']);
const categories = new Set([
  'popular',
  'web',
  'systems',
  'scripting',
  'functional',
  'academic',
  'legacy',
  'database',
  'dsl',
  'hardware',
  'game-dev',
  'esoteric'
]);
const suitability = new Set(['excellent', 'good', 'weak']);

const plannedDistractors = new Set([
  'Ada',
  'Alloy',
  'Assembly',
  'BASIC',
  'C',
  'C++',
  'Coq/Rocq',
  'Crystal',
  'Datalog',
  'Elm',
  'Erlang',
  'Factor',
  'F#',
  'Flow',
  'Fortran',
  'Hack',
  'Java',
  'JavaScript',
  'Joy',
  'Julia',
  'Lean',
  'Lua',
  'Mercury',
  'Nim',
  'OCaml',
  'Objective-C',
  'PL/I',
  'Perl',
  'PostScript',
  'PureScript',
  'Clojure',
  'Z notation',
  'Zig'
]);

const errors = [];
const warnings = [];
const ids = new Set();
const languages = new Set(questions.map((question) => question.language));
const knownLanguages = new Set([...languages, ...plannedDistractors]);

for (const question of questions) {
  validateRequiredString(question.id, 'id', question.id);
  validateRequiredString(question.language, 'language', question.id);
  validateRequiredString(question.code, 'code', question.id);
  validateRequiredString(question.highlightLanguage, 'highlightLanguage', question.id);
  validateRequiredString(question.explanation, 'explanation', question.id);

  if (ids.has(question.id)) {
    errors.push(`Duplicate question id: ${question.id}`);
  }
  ids.add(question.id);

  if (!difficulties.has(question.difficulty)) {
    errors.push(`${question.id}: invalid difficulty "${question.difficulty}"`);
  }

  if (!categories.has(question.category)) {
    errors.push(`${question.id}: invalid category "${question.category}"`);
  }

  if (!suitability.has(question.quizSuitability)) {
    errors.push(`${question.id}: invalid quizSuitability "${question.quizSuitability}"`);
  }

  if (!Array.isArray(question.aliases) || question.aliases.length === 0) {
    errors.push(`${question.id}: aliases must contain at least one value`);
  }

  if (!question.aliases.some((alias) => normalize(alias) === normalize(question.language))) {
    warnings.push(`${question.id}: aliases do not include canonical language name "${question.language}"`);
  }

  if (!Array.isArray(question.discriminators) || question.discriminators.length === 0) {
    errors.push(`${question.id}: discriminators must contain at least one value`);
  }

  if (!Array.isArray(question.confusionGroup) || question.confusionGroup.length < 3) {
    errors.push(`${question.id}: confusionGroup should contain at least 3 plausible distractors`);
  }

  for (const language of question.confusionGroup ?? []) {
    if (!knownLanguages.has(language)) {
      errors.push(`${question.id}: unknown confusion-group language "${language}"`);
    }
  }

  if (question.confusionGroup?.includes(question.language)) {
    errors.push(`${question.id}: confusionGroup contains the correct language`);
  }

  if (/hello,?\s+world/i.test(question.code)) {
    errors.push(`${question.id}: snippet looks like a Hello World pattern`);
  }
}

const languageCounts = new Map();
for (const question of questions) {
  languageCounts.set(question.language, (languageCounts.get(question.language) ?? 0) + 1);
}

const multiSnippetLanguages = Array.from(languageCounts.entries()).filter(([, count]) => count > 1).length;

console.log(`Validated ${questions.length} snippets across ${languageCounts.size} languages.`);
console.log(`${multiSnippetLanguages} languages currently have multiple snippets.`);

for (const warning of warnings) {
  console.warn(`Warning: ${warning}`);
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`Error: ${error}`);
  }
  process.exit(1);
}

function validateRequiredString(value, field, id) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    errors.push(`${id || 'unknown'}: ${field} must be a non-empty string`);
  }
}

function normalize(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[._]/g, '');
}
