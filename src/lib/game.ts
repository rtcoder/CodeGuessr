import { canonicalLanguage, matchesLanguage } from './languages';
import { questions } from './data/questions';
import type { AnswerResult, CodeQuestion, GameMode } from './types';

const roundSize = 10;
const recentSnippetLimit = 80;

export function questionsForMode(mode: GameMode) {
  if (mode === 'insane') {
    return questions.filter((question) => question.difficulty === 'insane');
  }

  if (mode === 'easy') {
    return questions.filter((question) => question.difficulty !== 'insane');
  }

  if (mode === 'hard') {
    return questions.filter((question) => question.difficulty !== 'easy' && question.difficulty !== 'insane');
  }

  return questions.filter((question) => question.difficulty === 'medium' || question.difficulty === 'hard');
}

export function createRound(mode: GameMode, recentSnippetIds: string[] = [], seed = String(Date.now())) {
  const pool = questionsForMode(mode);
  const recent = new Set(recentSnippetIds);
  const freshPool = pool.filter((question) => !recent.has(question.id));
  const candidates = freshPool.length >= roundSize ? freshPool : pool;
  const shuffled = shuffle(candidates, `${mode}:${seed}:round`);
  const picked: CodeQuestion[] = [];
  const pickedLanguages = new Set<string>();

  for (const question of shuffled) {
    if (pickedLanguages.has(question.language)) continue;
    picked.push(question);
    pickedLanguages.add(question.language);

    if (picked.length === roundSize) {
      return picked;
    }
  }

  for (const question of shuffled) {
    if (picked.some((item) => item.id === question.id)) continue;
    picked.push(question);

    if (picked.length === roundSize) {
      return picked;
    }
  }

  return picked;
}

export function buildChoices(question: CodeQuestion, mode: GameMode) {
  const pool =
    mode === 'easy'
      ? unique([...question.confusionGroup, ...questions.map((item) => item.language)])
      : unique([...question.confusionGroup, ...questionsForMode(mode).map((item) => item.language)]);

  const wrongAnswers = shuffle(
    pool.filter((language) => language !== question.language),
    `${question.id}:${mode}:wrong-answers`
  ).slice(0, 3);

  return shuffle([question.language, ...wrongAnswers], `${question.id}:${mode}:answer-order`);
}

export function checkAnswer(question: CodeQuestion, answer: string): AnswerResult {
  return {
    correct: matchesLanguage(answer, question.language),
    expected: question.language
  };
}

export function scoreLabel(score: number, total: number) {
  if (total === 0) return 'Ready';

  const ratio = score / total;
  if (ratio === 1) return 'Perfect read';
  if (ratio >= 0.8) return 'Sharp eye';
  if (ratio >= 0.5) return 'Pattern forming';
  return 'Warm-up pass';
}

export function displayAnswer(answer: string) {
  return canonicalLanguage(answer);
}

export function rememberRecentSnippetIds(currentIds: string[], round: CodeQuestion[]) {
  return unique([...round.map((question) => question.id), ...currentIds]).slice(0, recentSnippetLimit);
}

function shuffle<T>(items: T[], seed: string) {
  const random = seededRandom(seed);
  return [...items].sort(() => random() - 0.5);
}

function unique(items: string[]) {
  return Array.from(new Set(items));
}

function seededRandom(seed: string) {
  let state = hashSeed(seed);

  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function hashSeed(seed: string) {
  let hash = 2166136261;

  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}
