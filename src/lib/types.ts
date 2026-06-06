export type GameMode = 'easy' | 'normal' | 'hard' | 'insane';

export type Question = {
  id: string;
  language: string;
  snippet: string;
  grammar: string;
  confusionGroup: string[];
  discriminators: string[];
  difficulty: 'easy' | 'normal' | 'hard' | 'insane';
};

export type AnswerResult = {
  correct: boolean;
  expected: string;
};
