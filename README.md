# CodeGuessr

CodeGuessr is a programming-language guessing quiz for people who enjoy reading code and spotting what makes a language recognizable. The app shows a short snippet, and the player guesses the language from syntax, idioms, operators, module systems, comments, standard-library calls, and other language-specific fingerprints.

This is not a `Hello, world` quiz. Snippets are meant to be distinct, useful, and recognizable without requiring obscure library trivia.

## What's Inside

- 150 programming languages.
- 450 snippets, with 3 distinct snippets for every language.
- Game modes: `easy`, `normal`, `hard`, `insane`.
- 10-question rounds.
- Recent snippet avoidance, so rounds feel fresher.
- Hints after an incorrect attempt.
- Explanations that describe how each language can be recognized.
- Local stats and best scores stored in `localStorage`.
- A `/snippets` page with the full snippet catalog grouped alphabetically by language.
- Static GitHub Pages build, with no backend and no tracking.

## Stack

- SvelteKit
- Svelte 5
- TypeScript
- Vite
- PrismJS
- lucide-svelte
- Static TypeScript dataset
- GitHub Pages

## Local Development

```sh
npm install
npm run dev
```

The dev server binds to `127.0.0.1` by default. Vite will print the exact local URL in the terminal.

## Useful Commands

```sh
npm run check
```

Runs Svelte and TypeScript checks.

```sh
npm run build
```

Builds the static app into `build/`.

```sh
npm run validate:data
```

Validates the snippet dataset: required fields, difficulties, categories, answers, distractors, snippet count per language, and overly similar variants.

```sh
npm run coverage:data
```

Prints dataset coverage by language, difficulty, category, and quiz suitability.

## Data

Snippets live in:

```txt
src/lib/data/langs/
```

Each language file exports a list of questions using the `CodeQuestion` model:

```ts
type CodeQuestion = {
  id: string;
  language: string;
  aliases: string[];
  difficulty: 'easy' | 'medium' | 'hard' | 'insane';
  category: QuestionCategory;
  quizSuitability: 'excellent' | 'good' | 'weak';
  code: string;
  highlightLanguage: string;
  confusionGroup: string[];
  discriminators: string[];
  explanation: string;
  hints?: string[];
  notes?: string;
};
```

The core rule: every snippet should teach language recognition, not memorization. Snippets for the same language should cover different features, constructs, and usage contexts.

## Game Modes

- `easy` - excludes `insane` snippets.
- `normal` - the middle of the pack: `medium` and `hard`.
- `hard` - excludes the easiest and the most absurd cases.
- `insane` - niche, old, academic, esoteric, or otherwise unforgiving languages.

Each round picks 10 questions and tries to avoid repeating the same language within a round.

## Snippet Catalog

The catalog page is available at:

```txt
/snippets
```

It shows all snippets grouped alphabetically by language. Each entry includes code, metadata, and the `explanation` text, so the catalog also works as a small study guide for syntax recognition.

## GitHub Pages

Deployment is configured in:

```txt
.github/workflows/pages.yml
```

The workflow runs on pushes to `main` and can also be started manually with `workflow_dispatch`. It performs:

1. `npm ci`
2. `npm run check`
3. `npm run build`
4. upload of the `build/` directory
5. GitHub Pages deployment

The workflow uses current GitHub Actions versions and sets:

```txt
FORCE_JAVASCRIPT_ACTIONS_TO_NODE24=true
```

so the project is ready for the GitHub Actions transition from Node.js 20 to Node.js 24.

## Privacy

CodeGuessr does not need a backend. Scores, best rounds, and recently seen snippets are stored locally in the browser with `localStorage`.

## Status

Current dataset:

- 150 languages
- 450 snippets
- 3 snippets per language
- 405 snippets marked as `excellent`
- 45 snippets marked as `good`

The project is at an MVP+ stage and is ready for further polish: mode balancing, copy improvements, catalog filtering, and more manual snippet review for gameplay quality.
