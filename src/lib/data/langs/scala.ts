import type { CodeQuestion } from '$lib/types';

const scala: CodeQuestion[] = [
  {
    id: "scala-case-class-fold",
    language: "Scala",
    aliases: ["scala"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "scala",
    confusionGroup: ["Kotlin", "Haskell", "F#", "Java"],
    discriminators: ["case class", "Option.fold", "for comprehension", "yield"],
    explanation: "This is Scala. case class, Option-style values, for comprehensions, yield, and collection chaining distinguish it from Java and Kotlin.",
    code: `case class User(id: Long, email: Option[String])

val domains =
  for
    user <- users
    email <- user.email
  yield email.split("@").last

println(domains.groupBy(identity).view.mapValues(_.size))`,
  },
  {
    id: "scala-given-extension",
    language: "Scala",
    aliases: ["scala"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "scala",
    confusionGroup: ["Kotlin", "Haskell", "F#", "Java"],
    discriminators: ["given instance", "extension method", "using parameter", "Scala 3 indentation syntax"],
    explanation: "This is Scala. given, extension, using parameters, and indentation-based Scala 3 syntax separate it from Java and Kotlin.",
    code: `trait Encoder[A]:
  def encode(value: A): String

given Encoder[User] with
  def encode(user: User): String = s"\${user.id}:\${user.email}"

extension [A](value: A)
  def asJson(using encoder: Encoder[A]): String =
    encoder.encode(value)`,
  }
];

export default scala;
