<script lang="ts">
  import ArrowLeft from 'lucide-svelte/icons/arrow-left';
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
  import { base } from '$app/paths';
  import { questions } from '$lib/data/questions';
  import type { CodeQuestion } from '$lib/types';

  const collator = new Intl.Collator('en', { sensitivity: 'base' });
  const languageGroups = Array.from(groupByLanguage(questions).entries())
    .sort(([left], [right]) => collator.compare(left, right))
    .map(([language, snippets]) => ({
      language,
      snippets: snippets.toSorted((left, right) => collator.compare(left.id, right.id))
    }));

  function groupByLanguage(items: CodeQuestion[]) {
    const groups = new Map<string, CodeQuestion[]>();

    for (const item of items) {
      const group = groups.get(item.language) ?? [];
      group.push(item);
      groups.set(item.language, group);
    }

    return groups;
  }

  function highlighted(question: CodeQuestion) {
    const grammar = Prism.languages[question.highlightLanguage] ?? Prism.languages.clike;
    return Prism.highlight(question.code, grammar, question.highlightLanguage);
  }
</script>

<svelte:head>
  <title>All snippets - CodeGuessr</title>
  <meta
    name="description"
    content="Browse every CodeGuessr snippet grouped alphabetically by programming language."
  />
</svelte:head>

<main class="catalog-shell">
  <section class="catalog-hero">
    <div>
      <p class="eyebrow">CodeGuessr snippets</p>
      <h1>All code fingerprints.</h1>
      <p>{languageGroups.length} languages, {questions.length} snippets.</p>
    </div>

    <a class="secondary-action" href={`${base}/`}>
      <ArrowLeft size={18} aria-hidden="true" />
      Back to quiz
    </a>
  </section>

  <div class="catalog-layout">
    <aside class="language-sidebar">
      <div class="language-sidebar-heading">
        <p class="eyebrow">Index</p>
        <strong>{languageGroups.length} languages</strong>
      </div>

      <nav class="language-index" aria-label="Language index">
        {#each languageGroups as group}
          <a href={`#${group.language.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{group.language}</a>
        {/each}
      </nav>
    </aside>

    <section class="catalog-list" aria-label="Snippet catalog">
      {#each languageGroups as group}
        <article class="language-section" id={group.language.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
          <header>
            <div>
              <p class="eyebrow">Language</p>
              <h2>{group.language}</h2>
            </div>
            <span>{group.snippets.length} snippets</span>
          </header>

          <div class="snippet-grid">
            {#each group.snippets as snippet}
              <section class="snippet-card">
                <div class="snippet-meta">
                  <span>{snippet.difficulty}</span>
                  <span>{snippet.category}</span>
                </div>
                <h3>{snippet.id}</h3>
                <p>{snippet.explanation}</p>
                <pre aria-label={`${snippet.language} snippet`}><code class={`language-${snippet.highlightLanguage}`}>{@html highlighted(snippet)}</code></pre>
              </section>
            {/each}
          </div>
        </article>
      {/each}
    </section>
  </div>
</main>
