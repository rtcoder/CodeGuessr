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
  },
  {
    id: "dart-sealed-switch",
    language: "Dart",
    aliases: ["dart"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "dart",
    confusionGroup: ["JavaScript","TypeScript","Kotlin","Swift"],
    discriminators: ["sealed class","factory constructors","switch expression","pattern matching cases"],
    explanation: "This is Dart. This snippet uses a distinct Dart idiom: sealed class, factory constructors, switch expression.",
    code: `sealed class JobState {}
class Queued extends JobState { const Queued(this.id); final String id; }
class Failed extends JobState { const Failed(this.reason); final String reason; }

String label(JobState state) => switch (state) {
  Queued(:final id) => "queued:$id",
  Failed(:final reason) => "failed:$reason",
};`,
  },
  {
    id: "dart-stream-yield",
    language: "Dart",
    aliases: ["dart"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "dart",
    confusionGroup: ["JavaScript","TypeScript","Kotlin","Swift"],
    discriminators: ["async* generator","Stream<T>","yield keyword","await for loop"],
    explanation: "This is Dart. This snippet uses a distinct Dart idiom: async* generator, Stream<T>, yield keyword.",
    code: `Stream<int> retryDelays(int attempts) async* {
  for (var i = 0; i < attempts; i++) {
    await Future<void>.delayed(Duration(milliseconds: 20));
    yield 1 << i;
  }
}`,
  }
];

export default dart;
