export type GameMode = 'easy' | 'normal' | 'hard' | 'insane';

export type Difficulty = 'easy' | 'medium' | 'hard' | 'insane';

export type QuestionCategory =
  | 'popular'
  | 'web'
  | 'systems'
  | 'scripting'
  | 'functional'
  | 'academic'
  | 'legacy'
  | 'database'
  | 'dsl'
  | 'hardware'
  | 'game-dev'
  | 'esoteric';

export type QuizSuitability = 'excellent' | 'good' | 'weak';

export type CodeQuestion = {
  id: string;
  language: string;
  aliases: string[];
  difficulty: Difficulty;
  category: QuestionCategory;
  quizSuitability: QuizSuitability;
  code: string;
  highlightLanguage: string;
  confusionGroup: string[];
  discriminators: string[];
  explanation: string;
  hints?: string[];
  notes?: string;
};

export type AnswerResult = {
  correct: boolean;
  expected: string;
};
