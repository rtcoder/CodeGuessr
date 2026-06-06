import type { CodeQuestion } from '$lib/types';

const c: CodeQuestion[] = [
  {
    id: "c-pointer-struct-malloc",
    language: "C",
    aliases: ["c"],
    difficulty: "medium",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "c",
    confusionGroup: ["C++", "Rust", "Zig", "Assembly"],
    discriminators: ["#include <stdlib.h>", "typedef struct", "malloc/free", "pointer member access with ->"],
    explanation: "This is C. Header includes, typedef struct, malloc/free, raw pointers, and -> member access are classic C fingerprints.",
    code: `#include <stdlib.h>

typedef struct Node {
    int value;
    struct Node *next;
} Node;

Node *prepend(Node *head, int value) {
    Node *node = malloc(sizeof(Node));
    node->value = value;
    node->next = head;
    return node;
}`,
  },
  {
    id: "c-function-pointer-qsort",
    language: "C",
    aliases: ["c"],
    difficulty: "medium",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "c",
    confusionGroup: ["C++","Rust","Zig","Assembly"],
    discriminators: ["qsort callback","void pointer casts","sizeof operator","static comparator function"],
    explanation: "This is C. This snippet uses a distinct C idiom: qsort callback, void pointer casts, sizeof operator.",
    code: `#include <stdlib.h>

static int compare_ints(const void *left, const void *right) {
    int a = *(const int *)left;
    int b = *(const int *)right;
    return (a > b) - (a < b);
}

void sort_scores(int *scores, size_t len) {
    qsort(scores, len, sizeof *scores, compare_ints);
}`,
  },
  {
    id: "c-macro-bitflags",
    language: "C",
    aliases: ["c"],
    difficulty: "medium",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "c",
    confusionGroup: ["C++","Rust","Zig","Assembly"],
    discriminators: ["#define macro","bitwise flags","enum constants","unsigned integer mask"],
    explanation: "This is C. This snippet uses a distinct C idiom: #define macro, bitwise flags, enum constants.",
    code: `#include <stdint.h>

enum Permission { READ = 1u << 0, WRITE = 1u << 1, EXEC = 1u << 2 };
#define HAS_FLAG(mask, flag) (((mask) & (flag)) != 0)

uint32_t enable_write(uint32_t mask) {
    return mask | WRITE;
}`,
  }
];

export default c;
