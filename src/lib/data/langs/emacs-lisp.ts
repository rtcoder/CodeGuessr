import type { CodeQuestion } from '$lib/types';

const emacsLisp: CodeQuestion[] = [
  {
    id: "emacs-lisp-defun-interactive",
    language: "Emacs Lisp",
    aliases: ["emacs lisp", "elisp", "emacs lisp"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Common Lisp", "Scheme", "Racket", "Vim script"],
    discriminators: ["defun", "interactive spec", "setq", "message function"],
    explanation: "This is Emacs Lisp. This snippet uses defun, interactive spec, setq as recognizable fingerprints.",
    code: `(defun codeguessr-toggle-mode ()
  (interactive)
  (setq codeguessr-hard-mode (not codeguessr-hard-mode))
  (message "Hard mode: %s" codeguessr-hard-mode))`
  },
  {
    id: "emacs-lisp-use-package",
    language: "Emacs Lisp",
    aliases: ["emacs lisp", "elisp", "emacs lisp"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Common Lisp", "Scheme", "Racket", "Vim script"],
    discriminators: ["use-package macro", "setq inside :config", "keybinding syntax", "Emacs package DSL"],
    explanation: "This is Emacs Lisp. This snippet uses use-package macro, setq inside :config, keybinding syntax as recognizable fingerprints.",
    code: `(use-package magit
  :bind (("C-c g" . magit-status))
  :config
  (setq magit-display-buffer-function #'magit-display-buffer-fullframe-status-v1))`
  },
  {
    id: "emacs-lisp-buffer-loop",
    language: "Emacs Lisp",
    aliases: ["emacs lisp", "elisp", "emacs lisp"],
    difficulty: "hard",
    category: "functional",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["Common Lisp", "Scheme", "Racket", "Vim script"],
    discriminators: ["with-current-buffer", "save-excursion", "point-min", "while search-forward"],
    explanation: "This is Emacs Lisp. This snippet uses with-current-buffer, save-excursion, point-min as recognizable fingerprints.",
    code: `(with-current-buffer "*Messages*"
  (save-excursion
    (goto-char (point-min))
    (while (search-forward "error" nil t)
      (put-text-property (match-beginning 0) (match-end 0) 'face 'warning))))`
  }
];

export default emacsLisp;
