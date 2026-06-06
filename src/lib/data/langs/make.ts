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
  },
  {
    id: "make-phony-order-only",
    language: "Make",
    aliases: ["make","makefile","gnu make"],
    difficulty: "medium",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "makefile",
    confusionGroup: ["CMake","Bash","Nix","Batch"],
    discriminators: [".PHONY target","order-only prerequisite","$@ automatic variable","mkdir -p recipe"],
    explanation: "This is Make. This snippet uses a distinct Make idiom: .PHONY target, order-only prerequisite, $@ automatic variable.",
    code: `.PHONY: package

package: build/app | dist
	tar -czf dist/app.tar.gz build/app

dist:
	mkdir -p $@`,
  },
  {
    id: "make-foreach-eval",
    language: "Make",
    aliases: ["make","makefile","gnu make"],
    difficulty: "medium",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "makefile",
    confusionGroup: ["CMake","Bash","Nix","Batch"],
    discriminators: ["foreach function","eval function","call macro","Make variable expansion"],
    explanation: "This is Make. This snippet uses a distinct Make idiom: foreach function, eval function, call macro.",
    code: `define make-target
$1.out: $1.in
	cp $< $@
endef

$(foreach name,$(MODULES),$(eval $(call make-target,$(name))))`,
  }
];

export default make;
