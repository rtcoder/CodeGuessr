import type { CodeQuestion } from '$lib/types';

const swift: CodeQuestion[] = [
  {
    id: "swift-guard-enum",
    language: "Swift",
    aliases: ["swift"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "swift",
    confusionGroup: ["Kotlin", "Rust", "Objective-C", "TypeScript"],
    discriminators: ["guard let", "enum cases with associated values", "switch with case let"],
    explanation: "This is Swift. guard let, enum cases with associated values, switch pattern matching, and string interpolation with backslash parentheses identify it.",
    code: `enum Route {
    case user(id: Int)
    case search(term: String)
}

func render(_ route: Route?) -> String {
    guard let route else { return "missing" }

    switch route {
    case let .user(id):
        return "user/\\(id)"
    case let .search(term):
        return "search?q=\\(term)"
    }
}`,
  },
  {
    id: "swift-property-wrapper-task",
    language: "Swift",
    aliases: ["swift"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "swift",
    confusionGroup: ["Kotlin", "Rust", "Objective-C", "Dart"],
    discriminators: ["@MainActor attribute", "@Published property wrapper", "async/await", "Task closure"],
    explanation: "This is Swift. @MainActor, @Published, Task, async/await, and backslash-parentheses interpolation are Swift fingerprints.",
    code: `@MainActor
final class ProfileViewModel: ObservableObject {
    @Published private(set) var title = "Loading"

    func refresh() {
        Task {
            let user = try await service.currentUser()
            title = "\\(user.name) · \\(user.plan)"
        }
    }
}`,
  },
  {
    id: "swift-async-actor",
    language: "Swift",
    aliases: ["swift"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "swift",
    confusionGroup: ["Kotlin","Rust","Objective-C","TypeScript"],
    discriminators: ["actor declaration","async method","await keyword","isolated mutable state"],
    explanation: "This is Swift. This snippet uses a distinct Swift idiom: actor declaration, async method, await keyword.",
    code: `actor ImageCache {
    private var storage: [URL: Data] = [:]

    func data(for url: URL) async throws -> Data {
        if let cached = storage[url] { return cached }
        let (data, _) = try await URLSession.shared.data(from: url)
        storage[url] = data
        return data
    }
}`,
  }
];

export default swift;
