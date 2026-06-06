import type { CodeQuestion } from '$lib/types';

const arduinoWiring: CodeQuestion[] = [
  {
    id: "arduino-setup-loop",
    language: "Arduino/Wiring",
    aliases: ["arduino/wiring", "arduino", "wiring", "arduino wiring"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["C++", "Processing", "C", "MicroPython"],
    discriminators: ["setup/loop lifecycle", "pinMode", "digitalWrite", "delay"],
    explanation: "This is Arduino/Wiring. This snippet uses setup/loop lifecycle, pinMode, digitalWrite as recognizable fingerprints.",
    code: `const int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);
  delay(250);
  digitalWrite(ledPin, LOW);
  delay(250);
}`
  },
  {
    id: "arduino-analog-read",
    language: "Arduino/Wiring",
    aliases: ["arduino/wiring", "arduino", "wiring", "arduino wiring"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["C++", "Processing", "C", "MicroPython"],
    discriminators: ["analogRead", "Serial.begin", "Serial.println", "Arduino pin constants"],
    explanation: "This is Arduino/Wiring. This snippet uses analogRead, Serial.begin, Serial.println as recognizable fingerprints.",
    code: `void setup() {
  Serial.begin(9600);
}

void loop() {
  int value = analogRead(A0);
  Serial.println(value);
}`
  },
  {
    id: "arduino-attach-interrupt",
    language: "Arduino/Wiring",
    aliases: ["arduino/wiring", "arduino", "wiring", "arduino wiring"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["C++", "Processing", "C", "MicroPython"],
    discriminators: ["attachInterrupt", "digitalPinToInterrupt", "volatile variable", "ISR callback"],
    explanation: "This is Arduino/Wiring. This snippet uses attachInterrupt, digitalPinToInterrupt, volatile variable as recognizable fingerprints.",
    code: `volatile unsigned long pulses = 0;

void countPulse() {
  pulses++;
}

void setup() {
  attachInterrupt(digitalPinToInterrupt(2), countPulse, RISING);
}`
  }
];

export default arduinoWiring;
