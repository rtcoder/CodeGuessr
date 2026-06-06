import type { CodeQuestion } from '$lib/types';

const hcl: CodeQuestion[] = [
  {
    id: "hcl-terraform-resource",
    language: "HCL",
    aliases: ["hcl", "terraform", "hashicorp configuration language"],
    difficulty: "hard",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "hcl",
    confusionGroup: ["Nix", "Jsonnet", "YAML", "Dhall"],
    discriminators: ["resource block", "var.* interpolation", "for_each", "HashiCorp-style nested configuration"],
    explanation: "This is HCL. Terraform resource blocks, var references, for_each, and nested declarative configuration are HCL fingerprints.",
    code: `resource "aws_s3_bucket" "logs" {
  bucket = var.bucket_name

  tags = {
    Environment = var.environment
    ManagedBy   = "terraform"
  }
}

resource "aws_s3_bucket_lifecycle_configuration" "logs" {
  bucket = aws_s3_bucket.logs.id
  rule {
    id     = "expire-old-logs"
    status = "Enabled"
  }
}`,
  },
  {
    id: "hcl-module-block",
    language: "HCL",
    aliases: ["hcl","terraform","hashicorp configuration language"],
    difficulty: "hard",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "hcl",
    confusionGroup: ["Nix","Jsonnet","YAML","Dhall"],
    discriminators: ["module block","source attribute","Terraform variable reference","outputs map"],
    explanation: "This is HCL. This snippet uses a distinct HCL idiom: module block, source attribute, Terraform variable reference.",
    code: `module "queue" {
  source = "./modules/sqs"

  name       = var.queue_name
  fifo_queue = true
  tags = {
    service = "billing"
  }
}`,
  },
  {
    id: "hcl-locals-dynamic",
    language: "HCL",
    aliases: ["hcl","terraform","hashicorp configuration language"],
    difficulty: "hard",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "hcl",
    confusionGroup: ["Nix","Jsonnet","YAML","Dhall"],
    discriminators: ["locals block","for expression","dynamic block","each.value reference"],
    explanation: "This is HCL. This snippet uses a distinct HCL idiom: locals block, for expression, dynamic block.",
    code: `locals {
  ports = [80, 443]
}

resource "aws_security_group" "web" {
  dynamic "ingress" {
    for_each = local.ports
    content { from_port = ingress.value to_port = ingress.value protocol = "tcp" }
  }
}`,
  }
];

export default hcl;
