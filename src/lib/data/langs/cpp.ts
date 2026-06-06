import type { CodeQuestion } from '$lib/types';

const cpp: CodeQuestion[] = [
  {
    id: "cpp-ranges-unique-ptr",
    language: "C++",
    aliases: ["c++", "cpp", "cplusplus", "c plus plus"],
    difficulty: "medium",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "cpp",
    confusionGroup: ["C", "Rust", "Zig", "Java"],
    discriminators: ["#include <memory>", "std::unique_ptr", "template<typename T>", "std::ranges"],
    explanation: "This is C++. std:: namespaces, templates, unique_ptr, and ranges are C++ fingerprints rather than plain C.",
    code: `#include <memory>
#include <ranges>
#include <vector>

template <typename T>
auto active_values(const std::vector<std::unique_ptr<T>>& items) {
    return items
        | std::views::filter([](const auto& item) { return item->active(); })
        | std::views::transform([](const auto& item) { return item->value(); });
}`,
  }
];

export default cpp;
