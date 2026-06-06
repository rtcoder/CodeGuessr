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
  }
];

export default julia;
