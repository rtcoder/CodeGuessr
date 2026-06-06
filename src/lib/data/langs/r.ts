import type { CodeQuestion } from '$lib/types';

const r: CodeQuestion[] = [
  {
    id: "r-dplyr-pipeline",
    language: "R",
    aliases: ["r", "r language", "rlang"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "r",
    confusionGroup: ["Julia", "MATLAB", "Python", "SAS"],
    discriminators: ["library(dplyr)", "%>% pipe operator", "filter/select verbs", "tibble-style data workflow"],
    explanation: "This is R. library(dplyr), the %>% pipe, and data-frame verbs like filter and select are common R fingerprints.",
    code: `library(dplyr)

active_names <- users %>%
  filter(active == TRUE) %>%
  select(name, plan) %>%
  mutate(label = paste(name, plan, sep = " · "))

print(active_names)`,
  }
];

export default r;
