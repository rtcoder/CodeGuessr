import type { CodeQuestion } from '$lib/types';

const cython: CodeQuestion[] = [
  {
    id: "cython-cdef-loop",
    language: "Cython",
    aliases: ["cython", "cython", "pyx"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Python", "C", "Nim", "Julia"],
    discriminators: ["cdef typed variables", "cpdef function", "C int loop", "Python-compatible function"],
    explanation: "This is Cython. This snippet uses cdef typed variables, cpdef function, C int loop as recognizable fingerprints.",
    code: `cpdef int sum_ints(int[:] values):
    cdef Py_ssize_t i
    cdef int total = 0

    for i in range(values.shape[0]):
        total += values[i]

    return total`
  },
  {
    id: "cython-cimport-libc",
    language: "Cython",
    aliases: ["cython", "cython", "pyx"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Python", "C", "Nim", "Julia"],
    discriminators: ["from libc cimport", "malloc/free", "cdef pointer", "try/finally memory cleanup"],
    explanation: "This is Cython. This snippet uses from libc cimport, malloc/free, cdef pointer as recognizable fingerprints.",
    code: `from libc.stdlib cimport malloc, free

cdef double* allocate_scores(int count):
    cdef double* scores = <double*>malloc(count * sizeof(double))
    if scores == NULL:
        raise MemoryError()
    return scores`
  },
  {
    id: "cython-extension-class",
    language: "Cython",
    aliases: ["cython", "cython", "pyx"],
    difficulty: "hard",
    category: "systems",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Python", "C", "Nim", "Julia"],
    discriminators: ["cdef class", "cdef attribute", "property getter", "__cinit__ constructor"],
    explanation: "This is Cython. This snippet uses cdef class, cdef attribute, property getter as recognizable fingerprints.",
    code: `cdef class Counter:
    cdef int value

    def __cinit__(self, int start=0):
        self.value = start

    cpdef void increment(self):
        self.value += 1`
  }
];

export default cython;
