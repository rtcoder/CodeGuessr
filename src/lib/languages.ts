const aliases = new Map<string, string>();

const languageAliases: Record<string, string[]> = {
  JavaScript: ['js', 'javascript', 'node', 'nodejs', 'node.js', 'ecmascript'],
  TypeScript: ['ts', 'typescript'],
  'C#': ['c#', 'csharp', 'cs', 'c-sharp'],
  'C++': ['c++', 'cpp', 'cplusplus', 'c plus plus'],
  'F#': ['f#', 'fsharp', 'fs', 'f-sharp'],
  'Objective-C': ['objc', 'objective-c', 'objective c'],
  Python: ['py', 'python', 'python3'],
  Ruby: ['rb', 'ruby'],
  Rust: ['rs', 'rust'],
  Go: ['go', 'golang'],
  Kotlin: ['kt', 'kotlin'],
  Swift: ['swift'],
  Scala: ['scala'],
  Elixir: ['ex', 'elixir'],
  Erlang: ['erl', 'erlang'],
  Haskell: ['hs', 'haskell'],
  Clojure: ['clj', 'clojure'],
  PHP: ['php'],
  Lua: ['lua'],
  Dart: ['dart'],
  COBOL: ['cobol'],
  Fortran: ['fortran', 'f90', 'fortran90'],
  Prolog: ['prolog', 'pl'],
  APL: ['apl'],
  Brainfuck: ['brainfuck', 'bf'],
  Forth: ['forth'],
  'TLA+': ['tla+', 'tla', 'tlaplus'],
  Verilog: ['verilog'],
  VHDL: ['vhdl'],
  Lean: ['lean', 'lean4']
};

for (const [language, names] of Object.entries(languageAliases)) {
  aliases.set(normalize(language), language);
  for (const name of names) {
    aliases.set(normalize(name), language);
  }
}

export function normalize(answer: string) {
  return answer
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[._]/g, '');
}

export function canonicalLanguage(answer: string) {
  return aliases.get(normalize(answer)) ?? answer.trim();
}

export function matchesLanguage(answer: string, expected: string) {
  return canonicalLanguage(answer) === expected;
}

export const availableLanguages = Array.from(new Set(Object.values(Object.fromEntries(aliases)))).sort();
