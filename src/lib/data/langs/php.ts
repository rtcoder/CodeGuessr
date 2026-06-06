import type { CodeQuestion } from '$lib/types';

const php: CodeQuestion[] = [
  {
    id: "php-attributes-constructor-promotion",
    language: "PHP",
    aliases: ["php"],
    difficulty: "medium",
    category: "web",
    quizSuitability: "excellent",
    highlightLanguage: "php",
    confusionGroup: ["Hack", "JavaScript", "Ruby", "C#"],
    discriminators: ["PHP attribute syntax", "constructor property promotion", "readonly property", "named class method"],
    explanation: "This is PHP. #[...] attributes, constructor property promotion, readonly properties, and $ variables are modern PHP fingerprints.",
    code: `<?php

#[Route("/invoices/{id}", methods: ["GET"])]
final class ShowInvoice
{
    public function __construct(
        private readonly InvoiceRepository $invoices,
    ) {}

    public function __invoke(string $id): Response
    {
        return new JsonResponse($this->invoices->find($id));
    }
}`,
  },
  {
    id: "php-match-nullsafe",
    language: "PHP",
    aliases: ["php"],
    difficulty: "easy",
    category: "web",
    quizSuitability: "excellent",
    highlightLanguage: "php",
    confusionGroup: ["JavaScript", "Hack", "Perl", "Ruby"],
    discriminators: ["<?php tag", "nullsafe operator", "match expression", "array arrow syntax"],
    explanation: "This is PHP. The <?php opening tag, $ variables, nullsafe operator, match expression, and array arrow syntax are PHP clues.",
    code: `<?php

$tier = match ($user?->plan()) {
    "pro" => ["limit" => 5000],
    "team" => ["limit" => 20000],
    default => ["limit" => 250],
};

echo $tier["limit"];`,
  },
  {
    id: "php-enum-match",
    language: "PHP",
    aliases: ["php"],
    difficulty: "medium",
    category: "web",
    quizSuitability: "excellent",
    highlightLanguage: "php",
    confusionGroup: ["Hack","JavaScript","Ruby","C#"],
    discriminators: ["enum declaration","match expression","case labels","method inside enum"],
    explanation: "This is PHP. This snippet uses a distinct PHP idiom: enum declaration, match expression, case labels.",
    code: `<?php

enum InvoiceStatus: string
{
    case Draft = "draft";
    case Paid = "paid";

    public function canSendReceipt(): bool
    {
        return match ($this) {
            self::Paid => true,
            self::Draft => false,
        };
    }
}`,
  }
];

export default php;
