import type { CodeQuestion } from '$lib/types';

const perl: CodeQuestion[] = [
  {
    id: "perl-hash-regex",
    language: "Perl",
    aliases: ["perl", "pl"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "perl",
    confusionGroup: ["Ruby", "PHP", "Python", "AWK"],
    discriminators: ["use strict/use warnings", "sigils $ and @", "hash access with braces", "regex match operator =~"],
    explanation: "This is Perl. use strict, sigils, hash access, my declarations, and =~ regex matching are Perl fingerprints.",
    code: `use strict;
use warnings;

my @active = grep { $_->{active} } @users;

for my $user (@active) {
    next unless $user->{email} =~ /\\@example\\.com$/;
    print "$user->{name}\\n";
}`,
  }
];

export default perl;
