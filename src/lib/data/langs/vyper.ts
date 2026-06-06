import type { CodeQuestion } from '$lib/types';

const vyper: CodeQuestion[] = [
  {
    id: "vyper-external-event",
    language: "Vyper",
    aliases: ["vyper", "vyper"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Solidity", "Move", "Python", "Rust"],
    discriminators: ["@external decorator", "event declaration", "self storage access", "snake_case contract syntax"],
    explanation: "This is Vyper. This snippet uses @external decorator, event declaration, self storage access as recognizable fingerprints.",
    code: `event Deposited:
    sender: address
    amount: uint256

balances: public(HashMap[address, uint256])

@external
def deposit():
    self.balances[msg.sender] += msg.value
    log Deposited(msg.sender, msg.value)`
  },
  {
    id: "vyper-view-function",
    language: "Vyper",
    aliases: ["vyper", "vyper"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Solidity", "Move", "Python", "Rust"],
    discriminators: ["@view decorator", "returns annotation", "HashMap type", "contract storage variable"],
    explanation: "This is Vyper. This snippet uses @view decorator, returns annotation, HashMap type as recognizable fingerprints.",
    code: `rates: HashMap[address, uint256]

@view
@external
def quote(token: address, amount: uint256) -> uint256:
    return self.rates[token] * amount`
  },
  {
    id: "vyper-struct-array",
    language: "Vyper",
    aliases: ["vyper", "vyper"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Solidity", "Move", "Python", "Rust"],
    discriminators: ["struct declaration", "DynArray type", "append method", "@deploy constructor"],
    explanation: "This is Vyper. This snippet uses struct declaration, DynArray type, append method as recognizable fingerprints.",
    code: `struct Order:
    id: uint256
    owner: address

orders: DynArray[Order, 100]

@external
def add_order(id: uint256):
    self.orders.append(Order({id: id, owner: msg.sender}))`
  }
];

export default vyper;
