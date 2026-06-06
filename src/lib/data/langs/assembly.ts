import type { CodeQuestion } from '$lib/types';

const assembly: CodeQuestion[] = [
  {
    id: "assembly-x86-stack-frame",
    language: "Assembly",
    aliases: ["assembly", "asm", "assembly language", "x86 assembly"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["C", "Rust", "Zig", "C++"],
    discriminators: ["global label", "push rbp", "mov rbp, rsp", "ret instruction"],
    explanation: "This is Assembly. This snippet uses global label, push rbp, mov rbp, rsp as recognizable fingerprints.",
    code: `global add_pair

section .text
add_pair:
    push rbp
    mov rbp, rsp
    mov rax, rdi
    add rax, rsi
    pop rbp
    ret`
  },
  {
    id: "assembly-arm-branch",
    language: "Assembly",
    aliases: ["assembly", "asm", "assembly language", "x86 assembly"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["C", "Rust", "Zig", "C++"],
    discriminators: ["ARM registers r0/r1", "cmp instruction", "bge branch", "bx lr return"],
    explanation: "This is Assembly. This snippet uses ARM registers r0/r1, cmp instruction, bge branch as recognizable fingerprints.",
    code: `max_value:
    cmp r0, r1
    bge keep_left
    mov r0, r1
keep_left:
    bx lr`
  },
  {
    id: "assembly-data-section",
    language: "Assembly",
    aliases: ["assembly", "asm", "assembly language", "x86 assembly"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["C", "Rust", "Zig", "C++"],
    discriminators: ["section .data", "db directive", "equ constant", "syscall instruction"],
    explanation: "This is Assembly. This snippet uses section .data, db directive, equ constant as recognizable fingerprints.",
    code: `section .data
message db "ready", 10
len equ $ - message

section .text
global _start
_start:
    mov rax, 1
    mov rdi, 1
    mov rsi, message
    mov rdx, len
    syscall`
  }
];

export default assembly;
