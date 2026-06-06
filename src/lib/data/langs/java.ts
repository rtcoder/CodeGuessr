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
  },
  {
    id: "java-record-sealed-switch",
    language: "Java",
    aliases: ["java"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "java",
    confusionGroup: ["C#","Kotlin","Scala","C++"],
    discriminators: ["record declaration","sealed interface","permits clause","switch pattern style"],
    explanation: "This is Java. This snippet uses a distinct Java idiom: record declaration, sealed interface, permits clause.",
    code: `sealed interface Command permits Create, Delete {}
record Create(String id) implements Command {}
record Delete(String id, boolean hard) implements Command {}

static String audit(Command command) {
    return switch (command) {
        case Create c -> "create:" + c.id();
        case Delete d -> d.hard() ? "purge" : "delete";
    };
}`,
  },
  {
    id: "java-completablefuture-chain",
    language: "Java",
    aliases: ["java"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "java",
    confusionGroup: ["C#","Kotlin","Scala","C++"],
    discriminators: ["CompletableFuture","thenCompose chain","lambda expressions","method reference"],
    explanation: "This is Java. This snippet uses a distinct Java idiom: CompletableFuture, thenCompose chain, lambda expressions.",
    code: `CompletableFuture<Receipt> checkout(Cart cart) {
    return inventory.reserve(cart.items())
        .thenCompose(token -> payments.charge(cart.total(), token))
        .thenApply(Receipt::fromPayment);
}`,
  }
];

export default java;
