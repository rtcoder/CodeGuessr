import type { CodeQuestion } from '$lib/types';

const vala: CodeQuestion[] = [
  {
    id: "vala-signal-property",
    language: "Vala",
    aliases: ["vala", "vala"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["C#", "Java", "GNOME", "Genie"],
    discriminators: ["class extends Object", "signal declaration", "property get/set", "GLib style"],
    explanation: "This is Vala. This snippet uses class extends Object, signal declaration, property get/set as recognizable fingerprints.",
    code: `public class Counter : Object {
    public signal void changed(int value);
    public int value { get; private set; }

    public void increment() {
        value++;
        changed(value);
    }
}`
  },
  {
    id: "vala-async-yield",
    language: "Vala",
    aliases: ["vala", "vala"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["C#", "Java", "GNOME", "Genie"],
    discriminators: ["async method", "yield keyword", "throws Error", "Vala GLib async style"],
    explanation: "This is Vala. This snippet uses async method, yield keyword, throws Error as recognizable fingerprints.",
    code: `public async string load_name(File file) throws Error {
    uint8[] bytes;
    yield file.load_contents_async(null, out bytes, null);
    return (string) bytes;
}`
  },
  {
    id: "vala-gee-list",
    language: "Vala",
    aliases: ["vala", "vala"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["C#", "Java", "GNOME", "Genie"],
    discriminators: ["Gee.ArrayList", "foreach loop", "var inference", "C#-like syntax with GNOME APIs"],
    explanation: "This is Vala. This snippet uses Gee.ArrayList, foreach loop, var inference as recognizable fingerprints.",
    code: `var names = new Gee.ArrayList<string>();
names.add("api");
names.add("worker");

foreach (var name in names) {
    stdout.printf("%s\n", name.up());
}`
  }
];

export default vala;
