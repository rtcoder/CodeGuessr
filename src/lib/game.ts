import { canonicalLanguage, matchesLanguage } from './languages';
import { questions } from './data/questions';
import type { AnswerResult, CodeQuestion, GameMode } from './types';

const roundSize = 10;

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

export function createRound(mode: GameMode) {
  return shuffle(questionsForMode(mode)).slice(0, roundSize);
}

export function buildChoices(question: CodeQuestion, mode: GameMode) {
  const pool =
    mode === 'easy'
      ? unique([...question.confusionGroup, ...questions.map((item) => item.language)])
      : unique([...question.confusionGroup, ...questionsForMode(mode).map((item) => item.language)]);

  const wrongAnswers = shuffle(pool.filter((language) => language !== question.language)).slice(0, 3);
  return shuffle([question.language, ...wrongAnswers]);
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

function shuffle<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5);
}

function unique(items: string[]) {
  return Array.from(new Set(items));
}
