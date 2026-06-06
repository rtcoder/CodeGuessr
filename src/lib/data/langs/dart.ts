import type { CodeQuestion } from '$lib/types';

const dart: CodeQuestion[] = [
  {
    id: "dart-future-extension",
    language: "Dart",
    aliases: ["dart"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "dart",
    confusionGroup: ["JavaScript", "TypeScript", "Kotlin", "Swift"],
    discriminators: ["Future<T>", "async/await", "extension method", "cascade operator"],
    explanation: "This is Dart. Future<T>, extension methods, async/await, and Dart collection/cascade idioms identify it.",
    code: `extension UserLabels on Iterable<User> {
  Future<List<String>> activeLabels() async {
    final users = where((user) => user.isActive);
    return [
      for (final user in users) "\${user.name} <\${user.email}>"
    ];
  }
}`,
  }
];

export default dart;
