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
  }
];

export default hcl;
