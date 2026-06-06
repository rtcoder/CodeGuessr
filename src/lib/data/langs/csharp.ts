import type { CodeQuestion } from '$lib/types';

const csharp: CodeQuestion[] = [
  {
    id: "csharp-linq-active-users",
    language: "C#",
    aliases: ["c#", "csharp", "cs", "c-sharp"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "csharp",
    confusionGroup: ["Java", "Kotlin", "TypeScript", "F#"],
    discriminators: ["using System.Linq", "LINQ extension methods", "Console.WriteLine"],
    explanation: "This is C#. LINQ extension methods, using System.Linq, and Console.WriteLine distinguish it from Java, Kotlin, and TypeScript.",
    code: `using System;
using System.Linq;

var activeNames = users
    .Where(user => user.IsActive)
    .Select(user => user.Name)
    .ToList();

Console.WriteLine(string.Join(", ", activeNames));`,
  },
  {
    id: "csharp-async-nullable-record",
    language: "C#",
    aliases: ["c#", "csharp", "cs", "c-sharp"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "csharp",
    confusionGroup: ["Java", "Kotlin", "TypeScript", "F#"],
    discriminators: ["record declaration", "async Task<T>", "nullable reference type", "await using"],
    explanation: "This is C#. record syntax, async Task<T>, nullable reference types, and await using are modern C# fingerprints.",
    code: `public sealed record UserDto(Guid Id, string? Email);

public async Task<UserDto?> LoadUserAsync(Guid id)
{
    await using var db = await factory.CreateDbContextAsync();
    return await db.Users
        .Where(user => user.Id == id)
        .Select(user => new UserDto(user.Id, user.Email))
        .SingleOrDefaultAsync();
}`,
  },
  {
    id: "csharp-record-pattern",
    language: "C#",
    aliases: ["c#","csharp","cs","c-sharp"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "csharp",
    confusionGroup: ["Java","Kotlin","TypeScript","F#"],
    discriminators: ["record type","switch expression","property pattern","nullable reference marker"],
    explanation: "This is C#. This snippet uses a distinct C# idiom: record type, switch expression, property pattern.",
    code: `public sealed record Payment(string Id, decimal Amount, string? Currency);

public static string Label(Payment payment) => payment switch
{
    { Currency: null } => "missing currency",
    { Amount: > 1000m } big => $"large:{big.Id}",
    _ => "standard"
};`,
  }
];

export default csharp;
