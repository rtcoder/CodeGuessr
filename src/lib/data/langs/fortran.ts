import type { CodeQuestion } from '$lib/types';

const fortran: CodeQuestion[] = [
  {
    id: "fortran-array-where",
    language: "Fortran",
    aliases: ["fortran", "f90", "fortran90"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "fortran",
    confusionGroup: ["COBOL", "Ada", "BASIC", "MATLAB"],
    discriminators: ["program/end program", "real, dimension(:)", "where array construct", "implicit none"],
    explanation: "This is Fortran. implicit none, typed arrays with dimension, where array operations, and end program are strong Fortran fingerprints.",
    code: `program normalize_scores
  implicit none
  real, dimension(5) :: scores = [92.0, 88.5, 0.0, 71.0, 64.5]

  where (scores > 0.0)
    scores = scores / maxval(scores)
  elsewhere
    scores = -1.0
  end where

  print *, scores
end program normalize_scores`,
  }
];

export default fortran;
