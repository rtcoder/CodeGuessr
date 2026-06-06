import type { CodeQuestion } from '$lib/types';

const plSql: CodeQuestion[] = [
  {
    id: "plsql-cursor-loop",
    language: "PL/SQL",
    aliases: ["pl/sql", "plsql", "pl/sql"],
    difficulty: "medium",
    category: "database",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["SQL", "T-SQL", "Oracle", "PostgreSQL"],
    discriminators: ["DECLARE block", "explicit cursor", "FETCH INTO", "EXIT WHEN cursor%NOTFOUND"],
    explanation: "This is PL/SQL. This snippet uses DECLARE block, explicit cursor, FETCH INTO as recognizable fingerprints.",
    code: `DECLARE
  CURSOR overdue_invoices IS
    SELECT id, total FROM invoices WHERE due_at < SYSDATE;
  invoice overdue_invoices%ROWTYPE;
BEGIN
  OPEN overdue_invoices;
  LOOP
    FETCH overdue_invoices INTO invoice;
    EXIT WHEN overdue_invoices%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE(invoice.id || ':' || invoice.total);
  END LOOP;
  CLOSE overdue_invoices;
END;`
  },
  {
    id: "plsql-exception-block",
    language: "PL/SQL",
    aliases: ["pl/sql", "plsql", "pl/sql"],
    difficulty: "medium",
    category: "database",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["SQL", "T-SQL", "Oracle", "PostgreSQL"],
    discriminators: ["CREATE OR REPLACE PROCEDURE", "EXCEPTION section", "NO_DATA_FOUND", "Oracle %TYPE attribute"],
    explanation: "This is PL/SQL. This snippet uses CREATE OR REPLACE PROCEDURE, EXCEPTION section, NO_DATA_FOUND as recognizable fingerprints.",
    code: `CREATE OR REPLACE PROCEDURE mark_paid(p_invoice_id invoices.id%TYPE) AS
BEGIN
  UPDATE invoices
     SET paid_at = SYSDATE
   WHERE id = p_invoice_id;

  IF SQL%ROWCOUNT = 0 THEN
    RAISE NO_DATA_FOUND;
  END IF;
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('missing invoice');
END;`
  },
  {
    id: "plsql-package-body",
    language: "PL/SQL",
    aliases: ["pl/sql", "plsql", "pl/sql"],
    difficulty: "medium",
    category: "database",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["SQL", "T-SQL", "Oracle", "PostgreSQL"],
    discriminators: ["PACKAGE BODY", "function inside package", "RETURN NUMBER", "Oracle package namespace"],
    explanation: "This is PL/SQL. This snippet uses PACKAGE BODY, function inside package, RETURN NUMBER as recognizable fingerprints.",
    code: `CREATE OR REPLACE PACKAGE BODY billing_totals AS
  FUNCTION taxable_amount(p_total NUMBER) RETURN NUMBER IS
  BEGIN
    RETURN ROUND(p_total * 0.23, 2);
  END taxable_amount;
END billing_totals;`
  }
];

export default plSql;
