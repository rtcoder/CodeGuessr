import type { CodeQuestion } from '$lib/types';

const julia: CodeQuestion[] = [
  {
    id: "julia-multiple-dispatch",
    language: "Julia",
    aliases: ["julia", "jl"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "julia",
    confusionGroup: ["Python", "R", "MATLAB", "Nim"],
    discriminators: ["multiple dispatch method signatures", ":: type annotations", "broadcasting with dot syntax", "end keyword"],
    explanation: "This is Julia. Multiple dispatch with typed method signatures, :: annotations, broadcasting dots, and end are Julia clues.",
    code: `struct User
    name::String
    scores::Vector{Float64}
end

average(user::User) = mean(user.scores)

function active_labels(users::Vector{User})
    scores = average.(users)
    return ["$(user.name): $(round(score, digits=2))" for (user, score) in zip(users, scores)]
end`,
  },
  {
    id: "julia-macro-quote",
    language: "Julia",
    aliases: ["julia","jl"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "julia",
    confusionGroup: ["Python","R","MATLAB","Nim"],
    discriminators: ["macro definition","quote block","esc call","Julia metaprogramming"],
    explanation: "This is Julia. This snippet uses a distinct Julia idiom: macro definition, quote block, esc call.",
    code: `macro twice(expr)
    quote
        $(esc(expr))
        $(esc(expr))
    end
end`,
  },
  {
    id: "julia-parametric-struct",
    language: "Julia",
    aliases: ["julia","jl"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "julia",
    confusionGroup: ["Python","R","MATLAB","Nim"],
    discriminators: ["parametric struct","where clause","multiple dispatch","end keyword"],
    explanation: "This is Julia. This snippet uses a distinct Julia idiom: parametric struct, where clause, multiple dispatch.",
    code: `struct Bucket{T}
    values::Vector{T}
end

function first_or(bucket::Bucket{T}, fallback::T) where T
    isempty(bucket.values) ? fallback : first(bucket.values)
end`,
  }
];

export default julia;
