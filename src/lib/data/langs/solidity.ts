import type { CodeQuestion } from '$lib/types';

const solidity: CodeQuestion[] = [
  {
    id: "solidity-contract-mapping",
    language: "Solidity",
    aliases: ["solidity", "sol"],
    difficulty: "hard",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "solidity",
    confusionGroup: ["Vyper", "Move", "JavaScript", "C++"],
    discriminators: ["pragma solidity", "contract declaration", "mapping(address => uint256)", "msg.sender"],
    explanation: "This is Solidity. pragma solidity, contract, mapping(address => ...), events, and msg.sender are Ethereum Solidity fingerprints.",
    code: `pragma solidity ^0.8.24;

contract Credits {
    mapping(address => uint256) private balances;
    event Added(address indexed account, uint256 amount);

    function add(uint256 amount) external {
        balances[msg.sender] += amount;
        emit Added(msg.sender, amount);
    }
}`,
  }
];

export default solidity;
