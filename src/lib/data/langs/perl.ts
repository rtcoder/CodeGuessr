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
  },
  {
    id: "perl-mojolicious-route",
    language: "Perl",
    aliases: ["perl","pl"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "perl",
    confusionGroup: ["Ruby","PHP","Python","AWK"],
    discriminators: ["Mojolicious route DSL","anonymous sub","$c controller variable","render json"],
    explanation: "This is Perl. This snippet uses a distinct Perl idiom: Mojolicious route DSL, anonymous sub, $c controller variable.",
    code: `use Mojolicious::Lite;

get "/health" => sub {
  my $c = shift;
  $c->render(json => { ok => 1 });
};

app->start;`,
  },
  {
    id: "perl-sub-signatures",
    language: "Perl",
    aliases: ["perl","pl"],
    difficulty: "medium",
    category: "scripting",
    quizSuitability: "excellent",
    highlightLanguage: "perl",
    confusionGroup: ["Ruby","PHP","Python","AWK"],
    discriminators: ["use feature signatures","no warnings experimental","sub signature syntax","hash dereference"],
    explanation: "This is Perl. This snippet uses a distinct Perl idiom: use feature signatures, no warnings experimental, sub signature syntax.",
    code: `use feature "signatures";
no warnings "experimental::signatures";

sub label($user) {
  return $user->{name} . ":" . $user->{role};
}`,
  }
];

export default perl;
