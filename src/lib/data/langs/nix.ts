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
  }
];

export default nix;
