import type { CodeQuestion } from '$lib/types';

const kotlin: CodeQuestion[] = [
  {
    id: "kotlin-sealed-when",
    language: "Kotlin",
    aliases: ["kotlin", "kt"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "kotlin",
    confusionGroup: ["Java", "Scala", "Swift", "C#"],
    discriminators: ["sealed interface", "data class", "when expression", "is type checks"],
    explanation: "This is Kotlin. sealed interface, data class, object singleton, and exhaustive when are strong Kotlin clues.",
    code: `sealed interface PaymentEvent
data class Captured(val cents: Int) : PaymentEvent
object Failed : PaymentEvent

fun label(event: PaymentEvent): String =
    when (event) {
        is Captured -> "captured: \${event.cents}"
        Failed -> "failed"
    }`,
  },
  {
    id: "kotlin-coroutine-flow",
    language: "Kotlin",
    aliases: ["kotlin", "kt"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "kotlin",
    confusionGroup: ["Java", "Scala", "Swift", "C#"],
    discriminators: ["suspend function", "Flow<T>", "emit", "when expression", "string interpolation"],
    explanation: "This is Kotlin. suspend functions, Flow, emit, when expressions, and $ interpolation separate it from Java and Scala.",
    code: `suspend fun streamLabels(events: Flow<Event>): Flow<String> = flow {
    events.collect { event ->
        val label = when (event) {
            is Event.Created -> "created:\${event.id}"
            is Event.Deleted -> "deleted:\${event.id}"
        }
        emit(label)
    }
}`,
  },
  {
    id: "kotlin-delegated-property",
    language: "Kotlin",
    aliases: ["kotlin","kt"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "kotlin",
    confusionGroup: ["Java","Scala","Swift","C#"],
    discriminators: ["by lazy delegated property","object expression","override fun","Kotlin property syntax"],
    explanation: "This is Kotlin. This snippet uses a distinct Kotlin idiom: by lazy delegated property, object expression, override fun.",
    code: `val client by lazy {
    object : Closeable {
        override fun close() { println("closed") }
    }
}`,
  }
];

export default kotlin;
