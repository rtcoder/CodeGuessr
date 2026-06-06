import type { CodeQuestion } from '$lib/types';

const tSql: CodeQuestion[] = [
  {
    id: "tsql-temp-table",
    language: "T-SQL",
    aliases: ["t-sql", "tsql", "t sql", "transact-sql", "transact sql"],
    difficulty: "medium",
    category: "database",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["SQL", "PL/SQL", "PostgreSQL", "MySQL"],
    discriminators: ["#temporary table", "DECLARE @variable", "INSERT INTO #table", "SELECT TOP"],
    explanation: "This is T-SQL. This snippet uses #temporary table, DECLARE @variable, INSERT INTO #table as recognizable fingerprints.",
    code: `DECLARE @limit int = 10;

CREATE TABLE #recent_orders (
  id int NOT NULL,
  created_at datetime2 NOT NULL
);

INSERT INTO #recent_orders
SELECT TOP (@limit) id, created_at
FROM dbo.orders
ORDER BY created_at DESC;`
  },
  {
    id: "tsql-try-catch",
    language: "T-SQL",
    aliases: ["t-sql", "tsql", "t sql", "transact-sql", "transact sql"],
    difficulty: "medium",
    category: "database",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["SQL", "PL/SQL", "PostgreSQL", "MySQL"],
    discriminators: ["BEGIN TRY/BEGIN CATCH", "THROW statement", "XACT_STATE()", "SQL Server transaction handling"],
    explanation: "This is T-SQL. This snippet uses BEGIN TRY/BEGIN CATCH, THROW statement, XACT_STATE() as recognizable fingerprints.",
    code: `BEGIN TRY
  BEGIN TRANSACTION;
  UPDATE dbo.accounts SET balance = balance - @amount WHERE id = @from;
  UPDATE dbo.accounts SET balance = balance + @amount WHERE id = @to;
  COMMIT TRANSACTION;
END TRY
BEGIN CATCH
  IF XACT_STATE() <> 0 ROLLBACK TRANSACTION;
  THROW;
END CATCH;`
  },
  {
    id: "tsql-merge-output",
    language: "T-SQL",
    aliases: ["t-sql", "tsql", "t sql", "transact-sql", "transact sql"],
    difficulty: "medium",
    category: "database",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["SQL", "PL/SQL", "PostgreSQL", "MySQL"],
    discriminators: ["MERGE statement", "OUTPUT inserted", "dbo schema prefix", "WHEN NOT MATCHED"],
    explanation: "This is T-SQL. This snippet uses MERGE statement, OUTPUT inserted, dbo schema prefix as recognizable fingerprints.",
    code: `MERGE dbo.customers AS target
USING @incoming AS source
ON target.email = source.email
WHEN MATCHED THEN
  UPDATE SET name = source.name
WHEN NOT MATCHED THEN
  INSERT (email, name) VALUES (source.email, source.name)
OUTPUT inserted.id, inserted.email;`
  }
];

export default tSql;
