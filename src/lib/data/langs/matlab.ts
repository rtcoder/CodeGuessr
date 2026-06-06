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
  }
];

export default matlab;
