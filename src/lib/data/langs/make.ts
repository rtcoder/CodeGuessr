import type { CodeQuestion } from '$lib/types';

const make: CodeQuestion[] = [
  {
    id: "make-pattern-rule",
    language: "Make",
    aliases: ["make", "makefile", "gnu make"],
    difficulty: "medium",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "makefile",
    confusionGroup: ["CMake", "Bash", "Nix", "Batch"],
    discriminators: ["target prerequisites syntax", "$@ automatic variable", "$< automatic variable", "pattern rule %.o: %.c"],
    explanation: "This is Make. Targets with prerequisites, pattern rules, automatic variables like $@ and $<, and tabbed recipes identify Make.",
    code: `CC := clang
CFLAGS := -O2 -Wall

objects := main.o parser.o report.o

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

validator: $(objects)
	$(CC) $(objects) -o $@`,
  }
];

export default make;
