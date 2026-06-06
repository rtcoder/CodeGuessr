import type { CodeQuestion } from '$lib/types';

const xquery: CodeQuestion[] = [
  {
    id: "xquery-for-let-return",
    language: "XQuery",
    aliases: ["xquery", "xquery"],
    difficulty: "medium",
    category: "database",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["XPath", "Cypher", "SQL", "XML"],
    discriminators: ["for/let/where/return", "XML element construction", "XPath path expressions", "dollar variables"],
    explanation: "This is XQuery. This snippet uses for/let/where/return, XML element construction, XPath path expressions as recognizable fingerprints.",
    code: `for $invoice in doc("invoices.xml")//invoice
let $total := xs:decimal($invoice/total)
where $total > 1000
return <large id="{$invoice/@id}">{$total}</large>`
  },
  {
    id: "xquery-typeswitch",
    language: "XQuery",
    aliases: ["xquery", "xquery"],
    difficulty: "medium",
    category: "database",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["XPath", "Cypher", "SQL", "XML"],
    discriminators: ["typeswitch expression", "case element()", "default branch", "XML type-oriented syntax"],
    explanation: "This is XQuery. This snippet uses typeswitch expression, case element(), default branch as recognizable fingerprints.",
    code: `typeswitch ($node)
  case element(invoice) return $node/total
  case element(customer) return $node/name
  default return "unknown"`
  },
  {
    id: "xquery-function-declare",
    language: "XQuery",
    aliases: ["xquery", "xquery"],
    difficulty: "medium",
    category: "database",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["XPath", "Cypher", "SQL", "XML"],
    discriminators: ["declare function", "sequence type annotation", "external variable", "QName namespace style"],
    explanation: "This is XQuery. This snippet uses declare function, sequence type annotation, external variable as recognizable fingerprints.",
    code: `declare variable $limit external;

declare function local:active($users as element(user)*) as element(user)* {
  $users[@active = "true"][position() <= $limit]
};`
  }
];

export default xquery;
