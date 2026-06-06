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
  },
  {
    id: "cmake-generator-expression",
    language: "CMake",
    aliases: ["cmake"],
    difficulty: "medium",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "cmake",
    confusionGroup: ["Make","Bash","Nix","Meson"],
    discriminators: ["generator expression","target_compile_definitions","CONFIG conditional","CMake target API"],
    explanation: "This is CMake. This snippet uses a distinct CMake idiom: generator expression, target_compile_definitions, CONFIG conditional.",
    code: `add_library(core STATIC core.cpp)

target_compile_definitions(core
  PRIVATE
    $<$<CONFIG:Debug>:CORE_DEBUG=1>
)`,
  },
  {
    id: "cmake-fetchcontent",
    language: "CMake",
    aliases: ["cmake"],
    difficulty: "medium",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "cmake",
    confusionGroup: ["Make","Bash","Nix","Meson"],
    discriminators: ["FetchContent_Declare","FetchContent_MakeAvailable","GIT_REPOSITORY option","target_link_libraries"],
    explanation: "This is CMake. This snippet uses a distinct CMake idiom: FetchContent_Declare, FetchContent_MakeAvailable, GIT_REPOSITORY option.",
    code: `include(FetchContent)

FetchContent_Declare(fmt
  GIT_REPOSITORY https://github.com/fmtlib/fmt.git
  GIT_TAG 10.2.1
)

FetchContent_MakeAvailable(fmt)
target_link_libraries(app PRIVATE fmt::fmt)`,
  }
];

export default cmake;
