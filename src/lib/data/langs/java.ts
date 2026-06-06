import type { CodeQuestion } from '$lib/types';

const java: CodeQuestion[] = [
  {
    id: "java-stream-method-reference",
    language: "Java",
    aliases: ["java"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "java",
    confusionGroup: ["C#", "Kotlin", "Scala", "C++"],
    discriminators: ["import java.util.stream.Collectors", "users.stream()", "method references with ::", "System.out.println"],
    explanation: "This is Java. The java.* import, Stream API, :: method references, Collectors, and System.out.println identify it.",
    code: `import java.util.stream.Collectors;

var names = users.stream()
    .filter(User::isActive)
    .map(User::getName)
    .collect(Collectors.toList());

System.out.println(String.join(", ", names));`,
  }
];

export default java;
