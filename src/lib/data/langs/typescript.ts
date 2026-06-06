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
  },
  {
    id: "typescript-conditional-mapped-type",
    language: "TypeScript",
    aliases: ["typescript","ts"],
    difficulty: "medium",
    category: "web",
    quizSuitability: "excellent",
    highlightLanguage: "typescript",
    confusionGroup: ["JavaScript","Kotlin","C#","Flow"],
    discriminators: ["conditional type","mapped type with as","key remapping","generic constraint"],
    explanation: "This is TypeScript. This snippet uses a distinct TypeScript idiom: conditional type, mapped type with as, key remapping.",
    code: `type EventMap<T extends { type: string }> = {
  [Event in T as Event["type"]]: (event: Event) => void;
};

type DomainEvent =
  | { type: "created"; id: string }
  | { type: "deleted"; id: string; hard: boolean };

const handlers: EventMap<DomainEvent> = {
  created: event => console.log(event.id),
  deleted: event => console.log(event.hard)
};`,
  }
];

export default typescript;
