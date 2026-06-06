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
  },
  {
    id: "solidity-event-modifier",
    language: "Solidity",
    aliases: ["solidity","sol"],
    difficulty: "hard",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "solidity",
    confusionGroup: ["Vyper","Move","JavaScript","C++"],
    discriminators: ["event declaration","modifier","require call","emit statement"],
    explanation: "This is Solidity. This snippet uses a distinct Solidity idiom: event declaration, modifier, require call.",
    code: `pragma solidity ^0.8.24;

contract Vault {
    address public owner;
    event Withdraw(address indexed by, uint256 amount);

    modifier onlyOwner() { require(msg.sender == owner); _; }

    function withdraw(uint256 amount) external onlyOwner {
        emit Withdraw(msg.sender, amount);
    }
}`,
  },
  {
    id: "solidity-struct-array",
    language: "Solidity",
    aliases: ["solidity","sol"],
    difficulty: "hard",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "solidity",
    confusionGroup: ["Vyper","Move","JavaScript","C++"],
    discriminators: ["struct declaration","storage dynamic array","calldata parameter","external function"],
    explanation: "This is Solidity. This snippet uses a distinct Solidity idiom: struct declaration, storage dynamic array, calldata parameter.",
    code: `pragma solidity ^0.8.24;

contract Registry {
    struct Entry { string name; uint256 createdAt; }
    Entry[] public entries;

    function add(string calldata name) external {
        entries.push(Entry(name, block.timestamp));
    }
}`,
  }
];

export default solidity;
