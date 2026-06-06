import type { CodeQuestion } from '$lib/types';

const puppetDsl: CodeQuestion[] = [
  {
    id: "puppet-class-resource",
    language: "Puppet DSL",
    aliases: ["puppet dsl", "puppet", "puppet dsl"],
    difficulty: "hard",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["HCL", "Nix", "Ruby", "Dhall"],
    discriminators: ["class declaration", "package resource", "service resource", "relationship arrow"],
    explanation: "This is Puppet DSL. This snippet uses class declaration, package resource, service resource as recognizable fingerprints.",
    code: `class nginx {
  package { 'nginx':
    ensure => installed,
  }

  service { 'nginx':
    ensure  => running,
    require => Package['nginx'],
  }
}`
  },
  {
    id: "puppet-define",
    language: "Puppet DSL",
    aliases: ["puppet dsl", "puppet", "puppet dsl"],
    difficulty: "hard",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["HCL", "Nix", "Ruby", "Dhall"],
    discriminators: ["defined resource type", "parameter defaults", "file resource", "Puppet variable interpolation"],
    explanation: "This is Puppet DSL. This snippet uses defined resource type, parameter defaults, file resource as recognizable fingerprints.",
    code: `define app_config(String $content, String $path = "/etc/app.conf") {
  file { $path:
    ensure  => file,
    content => $content,
  }
}`
  },
  {
    id: "puppet-hiera-lookup",
    language: "Puppet DSL",
    aliases: ["puppet dsl", "puppet", "puppet dsl"],
    difficulty: "hard",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "clike",
    confusionGroup: ["HCL", "Nix", "Ruby", "Dhall"],
    discriminators: ["lookup function", "each lambda", "notify resource", "Puppet hash iteration"],
    explanation: "This is Puppet DSL. This snippet uses lookup function, each lambda, notify resource as recognizable fingerprints.",
    code: `$users = lookup('app::users', { default_value => [] })

$users.each |String $name| {
  notify { "creating \${name}": }
}`
  }
];

export default puppetDsl;
