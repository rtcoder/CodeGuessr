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
  }
];

export default sql;
