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
  import { buildChoices, checkAnswer, createRound, displayAnswer, scoreLabel } from '$lib/game';
  import type { GameMode, Question } from '$lib/types';

  const modes: { id: GameMode; label: string; description: string }[] = [
    { id: 'easy', label: 'Easy', description: 'Four choices, lighter distractors' },
    { id: 'normal', label: 'Normal', description: 'Four choices from nearby languages' },
    { id: 'hard', label: 'Hard', description: 'Type the language name or alias' },
    { id: 'insane', label: 'Insane', description: 'Rare, legacy, academic, and esoteric' }
  ];

  let mode = $state<GameMode>('normal');
  let round: Question[] = $state([]);
  let index = $state(0);
  let score = $state(0);
  let streak = $state(0);
  let bestScore = $state(0);
  let selected = $state('');
  let textAnswer = $state('');
  let revealed = $state(false);
  let lastCorrect = $state<boolean | null>(null);

  const current = $derived(round[index]);
  const choices = $derived(current ? buildChoices(current, mode) : []);
  const isInputMode = $derived(mode === 'hard');
  const progress = $derived(round.length === 0 ? 0 : ((index + 1) / round.length) * 100);
  const complete = $derived(round.length > 0 && index >= round.length);
  const answeredValue = $derived(isInputMode ? textAnswer : selected);
  const canSubmit = $derived(answeredValue.trim().length > 0 && !revealed && Boolean(current));
  const title = $derived(scoreLabel(score, Math.max(index + (revealed ? 1 : 0), 0)));

  $effect(() => {
    if (!browser) return;

    const storedMode = localStorage.getItem('codeguessr.mode') as GameMode | null;
    const storedBest = Number(localStorage.getItem('codeguessr.best') ?? 0);

    if (storedMode && modes.some((item) => item.id === storedMode)) {
      mode = storedMode;
    }

    bestScore = Number.isFinite(storedBest) ? storedBest : 0;
    startRound(storedMode ?? mode);
  });

  $effect(() => {
    if (!browser) return;

    localStorage.setItem('codeguessr.mode', mode);
    localStorage.setItem('codeguessr.best', String(bestScore));
  });

  function startRound(nextMode = mode) {
    mode = nextMode;
    round = createRound(nextMode);
    index = 0;
    score = 0;
    streak = 0;
    selected = '';
    textAnswer = '';
    revealed = false;
    lastCorrect = null;
  }

  function submitAnswer(answer = answeredValue) {
    if (!current || !answer.trim() || revealed) return;

    const result = checkAnswer(current, answer);
    lastCorrect = result.correct;
    revealed = true;

    if (result.correct) {
      score += 1;
      streak += 1;
      bestScore = Math.max(bestScore, score);
    } else {
      streak = 0;
    }
  }

  function nextQuestion() {
    if (index + 1 >= round.length) {
      index = round.length;
      return;
    }

    index += 1;
    selected = '';
    textAnswer = '';
    revealed = false;
    lastCorrect = null;
  }

  function highlighted(question: Question) {
    const grammar = Prism.languages[question.grammar] ?? Prism.languages.clike;
    return Prism.highlight(question.snippet, grammar, question.grammar);
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
      <Trophy size={44} aria-hidden="true" />
      <div>
        <p class="eyebrow">Round complete</p>
        <h2>{title}</h2>
        <p>You scored {score} out of {round.length}. Best local score: {bestScore}.</p>
      </div>
      <button class="primary-action" type="button" onclick={() => startRound()}>
        <RotateCcw size={18} aria-hidden="true" />
        Play again
      </button>
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
        <pre aria-label="Code snippet"><code class={`language-${current.grammar}`}>{@html highlighted(current)}</code></pre>
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
