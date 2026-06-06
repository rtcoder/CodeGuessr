import type { CodeQuestion } from '$lib/types';

const sql: CodeQuestion[] = [
  {
    id: "sql-window-cte",
    language: "SQL",
    aliases: ["sql"],
    difficulty: "medium",
    category: "database",
    quizSuitability: "excellent",
    highlightLanguage: "sql",
    confusionGroup: ["T-SQL", "PL/SQL", "Cypher", "XQuery"],
    discriminators: ["WITH common table expression", "ROW_NUMBER window function", "PARTITION BY", "ORDER BY inside OVER"],
    explanation: "This is SQL. WITH CTEs, ROW_NUMBER(), OVER, PARTITION BY, and relational SELECT syntax are SQL fingerprints.",
    code: `WITH ranked_orders AS (SELECT customer_id,
                                             total_cents,
                                             ROW_NUMBER() OVER (
                                                 PARTITION BY customer_id
                                                 ORDER BY created_at DESC
                                                 ) AS order_rank
                                      FROM orders)
               SELECT customer_id, total_cents
               FROM ranked_orders
               WHERE order_rank = 1;`,
  },
  {
    id: "sql-recursive-cte",
    language: "SQL",
    aliases: ["sql"],
    difficulty: "medium",
    category: "database",
    quizSuitability: "excellent",
    highlightLanguage: "sql",
    confusionGroup: ["T-SQL","PL/SQL","Cypher","XQuery"],
    discriminators: ["WITH RECURSIVE","UNION ALL","recursive self-reference","anchor query"],
    explanation: "This is SQL. This snippet uses a distinct SQL idiom: WITH RECURSIVE, UNION ALL, recursive self-reference.",
    code: `WITH RECURSIVE tree AS (
  SELECT id, parent_id, 0 AS depth FROM nodes WHERE parent_id IS NULL
  UNION ALL
  SELECT n.id, n.parent_id, tree.depth + 1
  FROM nodes n JOIN tree ON n.parent_id = tree.id
)
SELECT * FROM tree;`,
  },
  {
    id: "sql-merge-upsert",
    language: "SQL",
    aliases: ["sql"],
    difficulty: "medium",
    category: "database",
    quizSuitability: "excellent",
    highlightLanguage: "sql",
    confusionGroup: ["T-SQL","PL/SQL","Cypher","XQuery"],
    discriminators: ["MERGE statement","WHEN MATCHED","WHEN NOT MATCHED","source subquery"],
    explanation: "This is SQL. This snippet uses a distinct SQL idiom: MERGE statement, WHEN MATCHED, WHEN NOT MATCHED.",
    code: `MERGE INTO accounts AS target
USING staged_accounts AS source
ON target.id = source.id
WHEN MATCHED THEN
  UPDATE SET email = source.email
WHEN NOT MATCHED THEN
  INSERT (id, email) VALUES (source.id, source.email);`,
  }
];

export default sql;
