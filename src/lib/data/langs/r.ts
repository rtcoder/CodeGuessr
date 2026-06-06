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
  },
  {
    id: "r-s4-class",
    language: "R",
    aliases: ["r","r language","rlang"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "r",
    confusionGroup: ["Julia","MATLAB","Python","SAS"],
    discriminators: ["setClass","setMethod","signature declaration","slot access with @"],
    explanation: "This is R. This snippet uses a distinct R idiom: setClass, setMethod, signature declaration.",
    code: `setClass("Invoice", slots = c(amount = "numeric"))

setMethod("show", "Invoice", function(object) {
  cat("Invoice", object@amount, "\n")
})`,
  },
  {
    id: "r-data-table",
    language: "R",
    aliases: ["r","r language","rlang"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "r",
    confusionGroup: ["Julia","MATLAB","Python","SAS"],
    discriminators: ["data.table syntax",":= assignment","by grouping","column symbols"],
    explanation: "This is R. This snippet uses a distinct R idiom: data.table syntax, := assignment, by grouping.",
    code: `library(data.table)

events <- data.table(service = c("api", "api", "worker"), ms = c(10, 20, 5))
events[, p95 := quantile(ms, 0.95), by = service]`,
  }
];

export default r;
