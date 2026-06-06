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
  },
  {
    id: "cplusplus-concepts-span",
    language: "C++",
    aliases: ["c++","cpp","cplusplus","c plus plus"],
    difficulty: "medium",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "cpp",
    confusionGroup: ["C","Rust","Zig","Java"],
    discriminators: ["template concept","std::span","requires clause","ranges-style constraint"],
    explanation: "This is C++. This snippet uses a distinct C++ idiom: template concept, std::span, requires clause.",
    code: `#include <concepts>
#include <span>

template <typename T>
concept Numeric = std::integral<T> || std::floating_point<T>;

template <Numeric T>
T sum(std::span<const T> values) {
    T total{};
    for (T value : values) total += value;
    return total;
}`,
  },
  {
    id: "cplusplus-variant-visit",
    language: "C++",
    aliases: ["c++","cpp","cplusplus","c plus plus"],
    difficulty: "medium",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "cpp",
    confusionGroup: ["C","Rust","Zig","Java"],
    discriminators: ["std::variant","std::visit","lambda overload visitor","namespace-qualified std symbols"],
    explanation: "This is C++. This snippet uses a distinct C++ idiom: std::variant, std::visit, lambda overload visitor.",
    code: `#include <string>
#include <variant>

using Event = std::variant<int, std::string>;

std::string render(const Event& event) {
    return std::visit([](const auto& value) {
        return std::to_string(value);
    }, event);
}`,
  }
];

export default cpp;
