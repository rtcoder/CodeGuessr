import type { CodeQuestion } from '$lib/types';

const zig: CodeQuestion[] = [
  {
    id: "zig-error-union-defer",
    language: "Zig",
    aliases: ["zig"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "zig",
    confusionGroup: ["C", "C++", "Rust", "Odin"],
    discriminators: ["const std = @import", "error union !T", "defer", "try error propagation"],
    explanation: "This is Zig. @import, error unions like ![]u8, defer, try, and explicit allocator parameters are Zig fingerprints.",
    code: `const std = @import("std");

fn readConfig(allocator: std.mem.Allocator, path: []const u8) ![]u8 {
    const file = try std.fs.cwd().openFile(path, .{});
    defer file.close();

    return try file.readToEndAlloc(allocator, 1024 * 1024);
}`,
  }
];

export default zig;
