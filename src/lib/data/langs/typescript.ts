import type { CodeQuestion } from '$lib/types';

const typescript: CodeQuestion[] = [
  {
    id: "typescript-satisfies-record",
    language: "TypeScript",
    aliases: ["typescript", "ts"],
    difficulty: "medium",
    category: "web",
    quizSuitability: "excellent",
    highlightLanguage: "typescript",
    confusionGroup: ["JavaScript", "Kotlin", "C#", "Flow"],
    discriminators: ["type alias", "Record generic", "satisfies operator", "optional chaining"],
    explanation: "This is TypeScript. A string-literal union type, Record<Role, string[]>, and the satisfies operator separate it from plain JavaScript.",
    code: `type Role = "admin" | "viewer";

const permissions = {
  admin: ["deploy", "invite"],
  viewer: ["read"]
} satisfies Record<Role, string[]>;

export function can(role: Role, action: string) {
  return permissions[role]?.includes(action) ?? false;
}`,
  },
  {
    id: "typescript-generic-type-guard",
    language: "TypeScript",
    aliases: ["typescript", "ts"],
    difficulty: "medium",
    category: "web",
    quizSuitability: "excellent",
    highlightLanguage: "typescript",
    confusionGroup: ["JavaScript", "Flow", "C#", "Kotlin"],
    discriminators: ["generic function", "keyof type operator", "type guard return", "unknown type"],
    explanation: "This is TypeScript. keyof, unknown, generic constraints, and a value is T type predicate are TypeScript-only clues.",
    code: `type FeatureFlags = {
  betaCheckout: boolean;
  darkMode: boolean;
};

function hasFlag<T extends object>(value: T, key: keyof T): key is keyof T {
  return Object.prototype.hasOwnProperty.call(value, key);
}

export function isEnabled(flags: FeatureFlags, name: unknown) {
  return typeof name === "string" && hasFlag(flags, name) && flags[name];
}`,
  }
];

export default typescript;
