import type { CodeQuestion } from '$lib/types';

const python: CodeQuestion[] = [
  {
    id: "python-dataclass-match",
    language: "Python",
    aliases: ["python", "py", "python3"],
    difficulty: "easy",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "python",
    confusionGroup: ["Ruby", "Julia", "JavaScript", "Lua"],
    discriminators: ["dataclass decorator", "match/case", "f-string"],
    explanation: "This is Python. The dataclass decorator, indentation, match/case syntax, and f-string point to modern Python.",
    code: `from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int

def describe(point: Point) -> str:
    match point:
        case Point(x=0, y=0):
            return "origin"
        case Point(x=x, y=y):
            return f"{x},{y}"`,
  },
  {
    id: "python-pathlib-comprehension",
    language: "Python",
    aliases: ["python", "py", "python3"],
    difficulty: "easy",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "python",
    confusionGroup: ["Ruby", "Julia", "Nim", "Lua"],
    discriminators: ["from pathlib import Path", "list comprehension", "with context manager", "indentation-based block"],
    explanation: "This is Python. pathlib imports, list comprehensions, with blocks, and indentation-based structure identify it clearly.",
    code: `from pathlib import Path

def read_titles(folder: Path) -> list[str]:
    files = [
        path
        for path in folder.glob("*.md")
        if path.is_file()
    ]

    with files[0].open(encoding="utf-8") as handle:
        return [line.strip("# \\n") for line in handle if line.startswith("# ")]`,
  },
  {
    id: "python-async-contextmanager",
    language: "Python",
    aliases: ["python","py","python3"],
    difficulty: "easy",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "python",
    confusionGroup: ["Ruby","Julia","JavaScript","Lua"],
    discriminators: ["async def","async with","contextlib.asynccontextmanager","yield inside context manager"],
    explanation: "This is Python. This snippet uses a distinct Python idiom: async def, async with, contextlib.asynccontextmanager.",
    code: `from contextlib import asynccontextmanager

@asynccontextmanager
async def transaction(pool):
    conn = await pool.acquire()
    try:
        yield conn
        await conn.commit()
    finally:
        await pool.release(conn)`,
  }
];

export default python;
