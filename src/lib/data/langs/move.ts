import type { CodeQuestion } from '$lib/types';

const move: CodeQuestion[] = [
  {
    id: "move-resource",
    language: "Move",
    aliases: ["move", "move language"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Solidity", "Vyper", "Rust", "D"],
    discriminators: ["resource struct", "module address syntax", "public entry fun", "move_to global storage"],
    explanation: "This is Move. This snippet uses resource struct, module address syntax, public entry fun as recognizable fingerprints.",
    code: `module 0x1::accounts {
  struct Account has key { balance: u64 }

  public entry fun open(owner: &signer) {
    move_to(owner, Account { balance: 0 });
  }
}`
  },
  {
    id: "move-borrow-global",
    language: "Move",
    aliases: ["move", "move language"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Solidity", "Vyper", "Rust", "D"],
    discriminators: ["borrow_global_mut", "acquires clause", "signer::address_of", "resource mutation"],
    explanation: "This is Move. This snippet uses borrow_global_mut, acquires clause, signer::address_of as recognizable fingerprints.",
    code: `module 0x1::ledger {
  use std::signer;
  struct Balance has key { value: u64 }

  public fun deposit(owner: &signer, amount: u64) acquires Balance {
    let balance = borrow_global_mut<Balance>(signer::address_of(owner));
    balance.value = balance.value + amount;
  }
}`
  },
  {
    id: "move-ability-generics",
    language: "Move",
    aliases: ["move", "move language"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Solidity", "Vyper", "Rust", "D"],
    discriminators: ["ability constraints", "generic type parameter", "has copy/drop/store", "Move vector API"],
    explanation: "This is Move. This snippet uses ability constraints, generic type parameter, has copy/drop/store as recognizable fingerprints.",
    code: `module 0x1::bags {
  public fun singleton<T: copy + drop + store>(item: T): vector<T> {
    let values = vector::empty<T>();
    vector::push_back(&mut values, item);
    values
  }
}`
  }
];

export default move;
