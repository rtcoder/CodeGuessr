import type { CodeQuestion } from '$lib/types';

const nix: CodeQuestion[] = [
  {
    id: "nix-derivation-attrs",
    language: "Nix",
    aliases: ["nix", "nix language"],
    difficulty: "hard",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "nix",
    confusionGroup: ["HCL", "Dhall", "Jsonnet", "Make"],
    discriminators: ["attribute set syntax", "let/in expression", "stdenv.mkDerivation", "with pkgs"],
    explanation: "This is Nix. Attribute sets, let/in expressions, stdenv.mkDerivation, and functional package definitions identify it.",
    code: `{ pkgs }:

let
  version = "1.0.0";
in
pkgs.stdenv.mkDerivation {
  pname = "codeguessr";
  inherit version;

  buildInputs = with pkgs; [ nodejs ];
  installPhase = ''
    mkdir -p $out/share/app
    cp -r build/* $out/share/app
  '';
}`,
  },
  {
    id: "nix-overlay",
    language: "Nix",
    aliases: ["nix","nix language"],
    difficulty: "hard",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "nix",
    confusionGroup: ["HCL","Dhall","Jsonnet","Make"],
    discriminators: ["overlay function self/super","attribute override","rec attribute set","Nix package expression"],
    explanation: "This is Nix. This snippet uses a distinct Nix idiom: overlay function self/super, attribute override, rec attribute set.",
    code: `self: super: {
  myTool = super.myTool.overrideAttrs (old: {
    version = "2.0.0";
    doCheck = true;
  });
}`,
  },
  {
    id: "nix-flake-output",
    language: "Nix",
    aliases: ["nix","nix language"],
    difficulty: "hard",
    category: "dsl",
    quizSuitability: "excellent",
    highlightLanguage: "nix",
    confusionGroup: ["HCL","Dhall","Jsonnet","Make"],
    discriminators: ["flake outputs function","nixpkgs input","packages attribute","system-specific package"],
    explanation: "This is Nix. This snippet uses a distinct Nix idiom: flake outputs function, nixpkgs input, packages attribute.",
    code: `{ inputs.nixpkgs.url = "github:NixOS/nixpkgs";

  outputs = { self, nixpkgs }: {
    packages.x86_64-linux.default = nixpkgs.legacyPackages.x86_64-linux.hello;
  };
}`,
  }
];

export default nix;
