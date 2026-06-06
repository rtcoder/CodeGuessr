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
  },
  {
    id: "zig-comptime-switch",
    language: "Zig",
    aliases: ["zig"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "zig",
    confusionGroup: ["C","C++","Rust","Odin"],
    discriminators: ["comptime parameter","switch on @typeInfo","std.debug.print","Zig builtin @typeInfo"],
    explanation: "This is Zig. This snippet uses a distinct Zig idiom: comptime parameter, switch on @typeInfo, std.debug.print.",
    code: `const std = @import("std");

fn describe(comptime T: type) void {
    switch (@typeInfo(T)) {
        .Int => std.debug.print("integer\n", .{}),
        .Struct => std.debug.print("struct\n", .{}),
        else => std.debug.print("other\n", .{}),
    }
}`,
  },
  {
    id: "zig-allocator-arraylist",
    language: "Zig",
    aliases: ["zig"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "zig",
    confusionGroup: ["C","C++","Rust","Odin"],
    discriminators: ["std.ArrayList","allocator parameter","defer deinit","try append"],
    explanation: "This is Zig. This snippet uses a distinct Zig idiom: std.ArrayList, allocator parameter, defer deinit.",
    code: `const std = @import("std");

fn collect(allocator: std.mem.Allocator) ![]u8 {
    var list = std.ArrayList(u8).init(allocator);
    defer list.deinit();
    try list.append(42);
    return list.toOwnedSlice();
}`,
  }
];

export default zig;
