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
  },
  {
    id: "fortran-module-contained-proc",
    language: "Fortran",
    aliases: ["fortran","f90","fortran90"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "fortran",
    confusionGroup: ["COBOL","Ada","BASIC","MATLAB"],
    discriminators: ["module declaration","contains section","intent(in)","end function"],
    explanation: "This is Fortran. This snippet uses a distinct Fortran idiom: module declaration, contains section, intent(in).",
    code: `module stats
contains
  real function mean(values)
    real, intent(in) :: values(:)
    mean = sum(values) / size(values)
  end function mean
end module stats`,
  },
  {
    id: "fortran-do-concurrent",
    language: "Fortran",
    aliases: ["fortran","f90","fortran90"],
    difficulty: "insane",
    category: "legacy",
    quizSuitability: "excellent",
    highlightLanguage: "fortran",
    confusionGroup: ["COBOL","Ada","BASIC","MATLAB"],
    discriminators: ["do concurrent","allocatable array","implicit none","array indexing"],
    explanation: "This is Fortran. This snippet uses a distinct Fortran idiom: do concurrent, allocatable array, implicit none.",
    code: `program normalize
  implicit none
  real, allocatable :: xs(:)
  integer :: i
  allocate(xs(10))
  do concurrent (i = 1:size(xs))
    xs(i) = real(i) / 10.0
  end do
end program normalize`,
  }
];

export default fortran;
