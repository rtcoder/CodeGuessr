<script lang="ts">
  import CheckCircle from 'lucide-svelte/icons/check-circle';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import Keyboard from 'lucide-svelte/icons/keyboard';
  import ListChecks from 'lucide-svelte/icons/list-checks';
  import RotateCcw from 'lucide-svelte/icons/rotate-ccw';
  import Trophy from 'lucide-svelte/icons/trophy';
  import XCircle from 'lucide-svelte/icons/x-circle';
  import Prism from 'prismjs';
  import 'prismjs/components/prism-clike';
  import 'prismjs/components/prism-csharp';
  import 'prismjs/components/prism-rust';
  import 'prismjs/components/prism-go';
  import 'prismjs/components/prism-kotlin';
  import 'prismjs/components/prism-swift';
  import 'prismjs/components/prism-ruby';
  import 'prismjs/components/prism-python';
  import 'prismjs/components/prism-javascript';
  import 'prismjs/components/prism-typescript';
  import 'prismjs/components/prism-elixir';
  import 'prismjs/components/prism-haskell';
  import 'prismjs/components/prism-cobol';
  import 'prismjs/components/prism-prolog';
  import 'prismjs/components/prism-verilog';
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import {
    buildChoices,
    checkAnswer,
    createRound,
    displayAnswer,
    rememberRecentSnippetIds,
    scoreLabel
  } from '$lib/game';
  import type { CodeQuestion, GameMode } from '$lib/types';

  const modes: { id: GameMode; label: string; description: string }[] = [
    { id: 'easy', label: 'Easy', description: 'Four choices, lighter distractors' },
    { id: 'normal', label: 'Normal', description: 'Four choices from nearby languages' },
    { id: 'hard', label: 'Hard', description: 'Type the language name or alias' },
    { id: 'insane', label: 'Insane', description: 'Rare, legacy, academic, and esoteric' }
  ];

  type ModeStats = {
    bestScore: number;
    bestStreak: number;
    rounds: number;
    answered: number;
    correct: number;
    misses: Record<string, number>;
  };

  type StatsByMode = Record<GameMode, ModeStats>;

  type RoundAnswer = {
    question: CodeQuestion;
    answer: string;
    normalizedAnswer: string;
    correct: boolean;
  };

  let mode = $state<GameMode>('normal');
  let round: CodeQuestion[] = $state([]);
  let index = $state(0);
  let score = $state(0);
  let streak = $state(0);
  let bestStreakThisRound = $state(0);
  let selected = $state('');
  let textAnswer = $state('');
  let revealed = $state(false);
  let lastCorrect = $state<boolean | null>(null);
  let recentSnippetIds = $state<string[]>([]);
  let roundAnswers = $state<RoundAnswer[]>([]);
  let modeStats = $state<StatsByMode>(createEmptyStats());
  let hydrated = $state(false);

  const current = $derived(round[index]);
  const choices = $derived(current ? buildChoices(current, mode) : []);
  const isInputMode = $derived(mode === 'hard');
  const progress = $derived(round.length === 0 ? 0 : ((index + 1) / round.length) * 100);
  const complete = $derived(round.length > 0 && index >= round.length);
  const answeredValue = $derived(isInputMode ? textAnswer : selected);
  const canSubmit = $derived(answeredValue.trim().length > 0 && !revealed && Boolean(current));
  const title = $derived(scoreLabel(score, Math.max(index + (revealed ? 1 : 0), 0)));
  const currentStats = $derived(modeStats[mode]);
  const bestScore = $derived(Math.max(score, currentStats.bestScore));
  const roundAccuracy = $derived(roundAnswers.length === 0 ? 0 : Math.round((score / roundAnswers.length) * 100));
  const missedAnswers = $derived(roundAnswers.filter((answer) => !answer.correct));
  const correctAnswers = $derived(roundAnswers.filter((answer) => answer.correct));
  const practiceLanguages = $derived(topMissedLanguages(missedAnswers));

  onMount(() => {
    const storedMode = localStorage.getItem('codeguessr.mode') as GameMode | null;
    const storedBest = Number(localStorage.getItem('codeguessr.best') ?? 0);
    const storedRecent = parseRecentSnippetIds(localStorage.getItem('codeguessr.recentSnippetIds'));
    const storedStats = parseModeStats(localStorage.getItem('codeguessr.stats'));

    if (storedMode && modes.some((item) => item.id === storedMode)) {
      mode = storedMode;
    }

    modeStats = storedStats;
    if (Number.isFinite(storedBest) && storedBest > 0) {
      modeStats = {
        ...modeStats,
        [mode]: {
          ...modeStats[mode],
          bestScore: Math.max(modeStats[mode].bestScore, storedBest)
        }
      };
    }

    recentSnippetIds = storedRecent;
    startRound(storedMode ?? mode, storedRecent);
    hydrated = true;
  });

  $effect(() => {
    if (!browser || !hydrated) return;

    localStorage.setItem('codeguessr.mode', mode);
    localStorage.setItem('codeguessr.best', String(bestScore));
    localStorage.setItem('codeguessr.stats', JSON.stringify(modeStats));
    localStorage.setItem('codeguessr.recentSnippetIds', JSON.stringify(recentSnippetIds));
  });

  function startRound(nextMode = mode, recentIds = recentSnippetIds) {
    mode = nextMode;
    round = createRound(nextMode, recentIds, createRoundSeed());
    recentSnippetIds = rememberRecentSnippetIds(recentIds, round);
    index = 0;
    score = 0;
    streak = 0;
    bestStreakThisRound = 0;
    selected = '';
    textAnswer = '';
    revealed = false;
    lastCorrect = null;
    roundAnswers = [];
  }

  function submitAnswer(answer = answeredValue) {
    if (!current || !answer.trim() || revealed) return;

    const result = checkAnswer(current, answer);
    const normalizedAnswer = displayAnswer(answer);
    lastCorrect = result.correct;
    revealed = true;
    roundAnswers = [
      ...roundAnswers,
      {
        question: current,
        answer,
        normalizedAnswer,
        correct: result.correct
      }
    ];

    if (result.correct) {
      score += 1;
      streak += 1;
      bestStreakThisRound = Math.max(bestStreakThisRound, streak);
    } else {
      streak = 0;
    }
  }

  function nextQuestion() {
    if (index + 1 >= round.length) {
      finishRound();
      return;
    }

    index += 1;
    selected = '';
    textAnswer = '';
    revealed = false;
    lastCorrect = null;
  }

  function finishRound() {
    const previous = modeStats[mode];
    const misses = { ...previous.misses };

    for (const answer of roundAnswers) {
      if (!answer.correct) {
        misses[answer.question.language] = (misses[answer.question.language] ?? 0) + 1;
      }
    }

    modeStats = {
      ...modeStats,
      [mode]: {
        bestScore: Math.max(previous.bestScore, score),
        bestStreak: Math.max(previous.bestStreak, bestStreakThisRound),
        rounds: previous.rounds + 1,
        answered: previous.answered + roundAnswers.length,
        correct: previous.correct + score,
        misses
      }
    };
    index = round.length;
  }

  function highlighted(question: CodeQuestion) {
    const grammar = Prism.languages[question.highlightLanguage] ?? Prism.languages.clike;
    return Prism.highlight(question.code, grammar, question.highlightLanguage);
  }

  function parseRecentSnippetIds(value: string | null) {
    if (!value) return [];

    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : [];
    } catch {
      return [];
    }
  }

  function createRoundSeed() {
    if (browser && crypto.randomUUID) {
      return crypto.randomUUID();
    }

    return String(Date.now());
  }

  function createEmptyStats(): StatsByMode {
    return {
      easy: createEmptyModeStats(),
      normal: createEmptyModeStats(),
      hard: createEmptyModeStats(),
      insane: createEmptyModeStats()
    };
  }

  function createEmptyModeStats(): ModeStats {
    return {
      bestScore: 0,
      bestStreak: 0,
      rounds: 0,
      answered: 0,
      correct: 0,
      misses: {}
    };
  }

  function parseModeStats(value: string | null): StatsByMode {
    const fallback = createEmptyStats();
    if (!value) return fallback;

    try {
      const parsed = JSON.parse(value) as Partial<Record<GameMode, Partial<ModeStats>>>;
      return {
        easy: normalizeModeStats(parsed.easy, fallback.easy),
        normal: normalizeModeStats(parsed.normal, fallback.normal),
        hard: normalizeModeStats(parsed.hard, fallback.hard),
        insane: normalizeModeStats(parsed.insane, fallback.insane)
      };
    } catch {
      return fallback;
    }
  }

  function normalizeModeStats(value: Partial<ModeStats> | undefined, fallback: ModeStats): ModeStats {
    return {
      bestScore: readNumber(value?.bestScore, fallback.bestScore),
      bestStreak: readNumber(value?.bestStreak, fallback.bestStreak),
      rounds: readNumber(value?.rounds, fallback.rounds),
      answered: readNumber(value?.answered, fallback.answered),
      correct: readNumber(value?.correct, fallback.correct),
      misses: value?.misses && typeof value.misses === 'object' ? value.misses : {}
    };
  }

  function readNumber(value: unknown, fallback: number) {
    return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
  }

  function topMissedLanguages(answers: RoundAnswer[]) {
    const counts = new Map<string, number>();

    for (const answer of answers) {
      counts.set(answer.question.language, (counts.get(answer.question.language) ?? 0) + 1);
    }

    return Array.from(counts.entries())
      .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
      .map(([language]) => language);
  }
</script>

<svelte:head>
  <title>CodeGuessr</title>
  <meta
    name="description"
    content="A programming-language guessing quiz built around syntax fingerprints and language idioms."
  />
</svelte:head>

<main class="app-shell">
  <section class="topbar" aria-label="Game status">
    <div>
      <p class="eyebrow">CodeGuessr</p>
      <h1>Guess the language by its code fingerprint.</h1>
    </div>

    <div class="score-strip">
      <div>
        <span>Score</span>
        <strong>{score}/{round.length || 10}</strong>
      </div>
      <div>
        <span>Streak</span>
        <strong>{streak}</strong>
      </div>
      <div>
        <span>Best</span>
        <strong>{bestScore}</strong>
      </div>
    </div>
  </section>

  <section class="mode-row" aria-label="Game modes">
    {#each modes as item}
      <button
        class:active={mode === item.id}
        type="button"
        aria-pressed={mode === item.id}
        title={item.description}
        onclick={() => startRound(item.id)}
      >
        {#if item.id === 'hard'}
          <Keyboard size={18} aria-hidden="true" />
        {:else}
          <ListChecks size={18} aria-hidden="true" />
        {/if}
        <span>{item.label}</span>
      </button>
    {/each}
  </section>

  {#if complete}
    <section class="finish-panel">
      <div class="finish-heading">
        <Trophy size={44} aria-hidden="true" />
        <div>
          <p class="eyebrow">Round complete</p>
          <h2>{title}</h2>
          <p>
            You scored {score} out of {round.length} in {mode} mode. Local best for this mode:
            {currentStats.bestScore}.
          </p>
        </div>
      </div>

      <div class="summary-grid" aria-label="Round summary">
        <div>
          <span>Accuracy</span>
          <strong>{roundAccuracy}%</strong>
        </div>
        <div>
          <span>Best streak</span>
          <strong>{bestStreakThisRound}</strong>
        </div>
        <div>
          <span>Rounds played</span>
          <strong>{currentStats.rounds}</strong>
        </div>
        <div>
          <span>Mode accuracy</span>
          <strong>
            {currentStats.answered === 0
              ? '0%'
              : `${Math.round((currentStats.correct / currentStats.answered) * 100)}%`}
          </strong>
        </div>
      </div>

      {#if missedAnswers.length > 0}
        <div class="summary-section">
          <div>
            <p class="eyebrow">Practice next</p>
            <h3>{practiceLanguages.join(', ')}</h3>
          </div>

          <div class="miss-list">
            {#each missedAnswers as answer}
              <article>
                <span>{answer.question.language}</span>
                <p>
                  Your answer: <strong>{answer.normalizedAnswer || answer.answer}</strong>
                </p>
                <small>{answer.question.discriminators.slice(0, 3).join(' / ')}</small>
              </article>
            {/each}
          </div>
        </div>
      {:else}
        <div class="summary-section clean-round">
          <p class="eyebrow">No weak spots</p>
          <h3>Clean round. Every fingerprint landed.</h3>
        </div>
      {/if}

      <div class="summary-section">
        <p class="eyebrow">Answered</p>
        <div class="answer-history">
          {#each roundAnswers as answer}
            <span class:missed={!answer.correct}>{answer.question.language}</span>
          {/each}
        </div>
      </div>

      <div class="finish-actions">
        <button class="primary-action" type="button" onclick={() => startRound()}>
          <RotateCcw size={18} aria-hidden="true" />
          Play again
        </button>
      </div>
    </section>
  {:else if current}
    <section class="game-grid">
      <article class="code-panel">
        <div class="question-meta">
          <span>Question {index + 1} of {round.length}</span>
          <span>{mode}</span>
        </div>
        <div class="progress-track" aria-hidden="true">
          <span style={`width: ${progress}%`}></span>
        </div>
        <pre aria-label="Code snippet"><code class={`language-${current.highlightLanguage}`}>{@html highlighted(current)}</code></pre>
      </article>

      <aside class="answer-panel">
        <div>
          <p class="eyebrow">Fingerprint read</p>
          <h2>{revealed ? (lastCorrect ? 'Correct' : 'Missed') : 'Pick the language'}</h2>
        </div>

        {#if isInputMode}
          <label class="answer-input">
            <span>Language</span>
            <input
              bind:value={textAnswer}
              disabled={revealed}
              placeholder="Try: csharp, js, objc..."
              onkeydown={(event) => {
                if (event.key === 'Enter') submitAnswer();
              }}
            />
          </label>
        {:else}
          <div class="choice-list">
            {#each choices as choice}
              <button
                type="button"
                class:selected={selected === choice}
                class:correct={revealed && choice === current.language}
                class:wrong={revealed && selected === choice && choice !== current.language}
                disabled={revealed}
                onclick={() => {
                  selected = choice;
                  submitAnswer(choice);
                }}
              >
                <span>{choice}</span>
                {#if revealed && choice === current.language}
                  <CheckCircle size={18} aria-hidden="true" />
                {:else if revealed && selected === choice && choice !== current.language}
                  <XCircle size={18} aria-hidden="true" />
                {/if}
              </button>
            {/each}
          </div>
        {/if}

        {#if revealed}
          <div class:last-wrong={!lastCorrect} class="reveal-box">
            <strong>{lastCorrect ? 'Yep.' : `It was ${current.language}.`}</strong>
            {#if isInputMode && !lastCorrect}
              <span>Your answer normalized to {displayAnswer(textAnswer) || 'nothing'}.</span>
            {/if}
            <span>{current.explanation}</span>
            <ul>
              {#each current.discriminators as clue}
                <li>{clue}</li>
              {/each}
            </ul>
          </div>
        {/if}

        <div class="actions">
          {#if isInputMode}
            <button class="primary-action" type="button" disabled={!canSubmit} onclick={() => submitAnswer()}>
              <CheckCircle size={18} aria-hidden="true" />
              Submit
            </button>
          {/if}
          <button class="secondary-action" type="button" disabled={!revealed} onclick={nextQuestion}>
            <ChevronRight size={18} aria-hidden="true" />
            Next
          </button>
        </div>
      </aside>
    </section>
  {/if}
</main>
