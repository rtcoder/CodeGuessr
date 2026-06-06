import type { CodeQuestion } from '$lib/types';

const matlab: CodeQuestion[] = [
  {
    id: "matlab-table-logical-indexing",
    language: "MATLAB",
    aliases: ["matlab"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "matlab",
    confusionGroup: ["R", "Julia", "Octave", "Python"],
    discriminators: ["table column access with dot syntax", "logical indexing", "end keyword", "fprintf"],
    explanation: "This is MATLAB. Table dot access, logical indexing, end, and fprintf are MATLAB/Octave-like fingerprints.",
    code: `function labels = activeLabels(users)
    activeRows = users(users.Active == true, :);
    labels = strings(height(activeRows), 1);

    for idx = 1:height(activeRows)
        labels(idx) = activeRows.Name(idx) + " / " + activeRows.Plan(idx);
    end

    fprintf("%d active users\\n", height(activeRows));
end`,
  },
  {
    id: "matlab-classdef",
    language: "MATLAB",
    aliases: ["matlab"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "matlab",
    confusionGroup: ["R","Julia","Octave","Python"],
    discriminators: ["classdef syntax","properties block","methods block","constructor named after class"],
    explanation: "This is MATLAB. This snippet uses a distinct MATLAB idiom: classdef syntax, properties block, methods block.",
    code: `classdef Counter
    properties
        Value double = 0
    end
    methods
        function obj = Counter(value)
            obj.Value = value;
        end
    end
end`,
  },
  {
    id: "matlab-anonymous-cellfun",
    language: "MATLAB",
    aliases: ["matlab"],
    difficulty: "medium",
    category: "popular",
    quizSuitability: "excellent",
    highlightLanguage: "matlab",
    confusionGroup: ["R","Julia","Octave","Python"],
    discriminators: ["anonymous function handle","cellfun","cell array braces","logical vector result"],
    explanation: "This is MATLAB. This snippet uses a distinct MATLAB idiom: anonymous function handle, cellfun, cell array braces.",
    code: `names = {"api", "worker", "db"};
isShort = cellfun(@(name) strlength(name) < 4, names);
shortNames = names(isShort);`,
  }
];

export default matlab;
