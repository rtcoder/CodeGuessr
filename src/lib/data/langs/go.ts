import type { CodeQuestion } from '$lib/types';

const go: CodeQuestion[] = [
  {
    id: "go-context-defer",
    language: "Go",
    aliases: ["go", "golang"],
    difficulty: "medium",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "go",
    confusionGroup: ["Rust", "Java", "C", "Kotlin"],
    discriminators: ["package main", "context.WithTimeout", "defer cancel()", "select over channel cases"],
    explanation: "This is Go. package declarations, func syntax, defer, channels, and select cases are Go-specific fingerprints.",
    code: `package main

import (
    "context"
    "time"
)

func fetchWithTimeout(done <-chan string) string {
    ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
    defer cancel()

    select {
    case value := <-done:
        return value
    case <-ctx.Done():
        return "timeout"
    }
}`,
  },
  {
    id: "go-error-handling-defer",
    language: "Go",
    aliases: ["go", "golang"],
    difficulty: "medium",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "go",
    confusionGroup: ["Rust", "C", "Zig", "Java"],
    discriminators: ["func declaration", "multiple return values", "err != nil", "defer file.Close()", ":= short declaration"],
    explanation: "This is Go. Multiple return values, explicit err != nil checks, defer, and := short declarations are classic Go fingerprints.",
    code: `func readConfig(path string) ([]byte, error) {
    file, err := os.Open(path)
    if err != nil {
        return nil, err
    }
    defer file.Close()

    return io.ReadAll(file)
}`,
  },
  {
    id: "go-interface-embedding",
    language: "Go",
    aliases: ["go","golang"],
    difficulty: "medium",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "go",
    confusionGroup: ["Rust","Java","C","Kotlin"],
    discriminators: ["interface embedding","struct method receiver","fmt.Sprintf","capitalized exported names"],
    explanation: "This is Go. This snippet uses a distinct Go idiom: interface embedding, struct method receiver, fmt.Sprintf.",
    code: `package billing

import "fmt"

type Store interface {
    Reader
    Save(id string) error
}

type Reader interface { Load(id string) (string, error) }

func Key(prefix, id string) string {
    return fmt.Sprintf("%s:%s", prefix, id)
}`,
  }
];

export default go;
