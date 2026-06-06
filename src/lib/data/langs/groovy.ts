import type { CodeQuestion } from '$lib/types';

const groovy: CodeQuestion[] = [
  {
    id: "groovy-collect-closure",
    language: "Groovy",
    aliases: ["groovy"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "groovy",
    confusionGroup: ["Java", "Kotlin", "Scala", "Ruby"],
    discriminators: ["def dynamic declaration", "closure with it", "findAll/collect collection methods", "GString interpolation"],
    explanation: "This is Groovy. def, findAll, collect, closure shorthand it, and GString interpolation distinguish it from Java.",
    code: `def activeLabels = users
    .findAll { it.active }
    .collect { user -> "\${user.name} <\${user.email}>" }

println activeLabels.join(", ")`,
  },
  {
    id: "groovy-builder-dsl",
    language: "Groovy",
    aliases: ["groovy"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "groovy",
    confusionGroup: ["Java","Kotlin","Scala","Ruby"],
    discriminators: ["MarkupBuilder DSL","closure delegate syntax","method calls without semicolons","GString interpolation"],
    explanation: "This is Groovy. This snippet uses a distinct Groovy idiom: MarkupBuilder DSL, closure delegate syntax, method calls without semicolons.",
    code: `def writer = new StringWriter()
def html = new groovy.xml.MarkupBuilder(writer)

html.ul {
  ["api", "worker"].each { service ->
    li(class: "service") { mkp.yield "\${service}:online" }
  }
}`,
  },
  {
    id: "groovy-spock-where",
    language: "Groovy",
    aliases: ["groovy"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "groovy",
    confusionGroup: ["Java","Kotlin","Scala","Ruby"],
    discriminators: ["Spock specification style","where: data table","expect: block","Groovy power assertion syntax"],
    explanation: "This is Groovy. This snippet uses a distinct Groovy idiom: Spock specification style, where: data table, expect: block.",
    code: `class PriceSpec extends spock.lang.Specification {
  def "applies discount"() {
    expect:
    price - discount == expected

    where:
    price | discount || expected
    20    | 5        || 15
    10    | 1        || 9
  }
}`,
  }
];

export default groovy;
