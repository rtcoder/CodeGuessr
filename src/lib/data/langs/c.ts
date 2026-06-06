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
  }
];

export default c;
