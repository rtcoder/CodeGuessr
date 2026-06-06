import { build } from 'esbuild';
import { writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export async function loadQuestions() {
  const result = await build({
    entryPoints: ['src/lib/data/questions.ts'],
    bundle: true,
    platform: 'node',
    format: 'esm',
    write: false,
    alias: {
      $lib: './src/lib'
    }
  });

  const outputFile = path.join(tmpdir(), `codeguessr-questions-${Date.now()}.mjs`);
  await writeFile(outputFile, result.outputFiles[0].text, 'utf8');

  const module = await import(pathToFileURL(outputFile).href);
  return module.questions;
}
