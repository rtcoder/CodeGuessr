import type { CodeQuestion } from '$lib/types';

const cypher: CodeQuestion[] = [
  {
    id: "cypher-match-merge",
    language: "Cypher",
    aliases: ["cypher", "cypher", "neo4j cypher"],
    difficulty: "medium",
    category: "database",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["SQL", "SPARQL", "Datalog", "XQuery"],
    discriminators: ["MATCH pattern", "MERGE relationship", "node labels", "property map"],
    explanation: "This is Cypher. This snippet uses MATCH pattern, MERGE relationship, node labels as recognizable fingerprints.",
    code: `MATCH (user:User {id: $userId})
MATCH (repo:Repository {name: $repoName})
MERGE (user)-[:STARRED]->(repo)
RETURN user.id, repo.name`
  },
  {
    id: "cypher-unwind",
    language: "Cypher",
    aliases: ["cypher", "cypher", "neo4j cypher"],
    difficulty: "medium",
    category: "database",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["SQL", "SPARQL", "Datalog", "XQuery"],
    discriminators: ["UNWIND list", "WITH clause", "collect aggregation", "graph query syntax"],
    explanation: "This is Cypher. This snippet uses UNWIND list, WITH clause, collect aggregation as recognizable fingerprints.",
    code: `UNWIND $events AS event
MATCH (service:Service {name: event.service})
CREATE (service)-[:EMITTED]->(:Event {type: event.type})
WITH service
RETURN service.name, count(*) AS total`
  },
  {
    id: "cypher-variable-length",
    language: "Cypher",
    aliases: ["cypher", "cypher", "neo4j cypher"],
    difficulty: "medium",
    category: "database",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["SQL", "SPARQL", "Datalog", "XQuery"],
    discriminators: ["variable-length relationship *1..3", "shortestPath", "WHERE predicate", "RETURN path"],
    explanation: "This is Cypher. This snippet uses variable-length relationship *1..3, shortestPath, WHERE predicate as recognizable fingerprints.",
    code: `MATCH path = shortestPath(
  (start:User {id: $from})-[:FOLLOWS*1..3]->(target:User {id: $to})
)
WHERE all(node IN nodes(path) WHERE node.active)
RETURN path`
  }
];

export default cypher;
