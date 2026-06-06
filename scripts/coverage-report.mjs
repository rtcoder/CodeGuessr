import { loadQuestions } from './load-questions.mjs';

const questions = await loadQuestions();

const byLanguage = groupBy(questions, (question) => question.language);
const byDifficulty = groupBy(questions, (question) => question.difficulty);
const byCategory = groupBy(questions, (question) => question.category);
const bySuitability = groupBy(questions, (question) => question.quizSuitability);

const multiSnippetLanguages = Array.from(byLanguage.entries())
  .filter(([, items]) => items.length > 1)
  .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

const singleSnippetLanguages = Array.from(byLanguage.entries())
  .filter(([, items]) => items.length === 1)
  .map(([language]) => language)
  .sort();

console.log('CodeGuessr dataset coverage');
console.log('===========================');
console.log(`Snippets: ${questions.length}`);
console.log(`Languages: ${byLanguage.size}`);
console.log(`Languages with multiple snippets: ${multiSnippetLanguages.length}`);
console.log('');

printGroup('Difficulty', byDifficulty);
printGroup('Category', byCategory);
printGroup('Suitability', bySuitability);

if (multiSnippetLanguages.length > 0) {
  console.log('Multi-snippet languages');
  console.log('-----------------------');
  for (const [language, items] of multiSnippetLanguages) {
    console.log(`${language}: ${items.length}`);
  }
  console.log('');
}

console.log('Single-snippet languages');
console.log('------------------------');
console.log(singleSnippetLanguages.join(', '));

function groupBy(items, getKey) {
  const groups = new Map();

  for (const item of items) {
    const key = getKey(item);
    const group = groups.get(key) ?? [];
    group.push(item);
    groups.set(key, group);
  }

  return groups;
}

function printGroup(label, group) {
  console.log(label);
  console.log('-'.repeat(label.length));

  for (const [key, items] of Array.from(group.entries()).sort(([a], [b]) => a.localeCompare(b))) {
    console.log(`${key}: ${items.length}`);
  }

  console.log('');
}
