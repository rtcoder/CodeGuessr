import type { CodeQuestion } from '$lib/types';

const cmake: CodeQuestion[] = [
  {
    id: "cmake-target-properties",
    language: "CMake",
    aliases: ["cmake"],
    difficulty: "medium",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "cmake",
    confusionGroup: ["Make", "Bash", "Nix", "Meson"],
    discriminators: ["cmake_minimum_required", "add_executable", "target_link_libraries", "PRIVATE/PUBLIC target keywords"],
    explanation: "This is CMake. cmake_minimum_required, project, add_executable, and target_* commands are CMake fingerprints.",
    code: `cmake_minimum_required(VERSION 3.28)
project(CodeGuessrTools LANGUAGES CXX)

add_executable(validator src/validator.cpp)
target_compile_features(validator PRIVATE cxx_std_20)
target_link_libraries(validator PRIVATE fmt::fmt)

install(TARGETS validator RUNTIME DESTINATION bin)`,
  }
];

export default cmake;
