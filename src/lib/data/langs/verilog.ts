import type { CodeQuestion } from '$lib/types';

const verilog: CodeQuestion[] = [
  {
    id: "verilog-always-posedge",
    language: "Verilog",
    aliases: ["verilog"],
    difficulty: "insane",
    category: "hardware",
    quizSuitability: "excellent",
    highlightLanguage: "verilog",
    confusionGroup: ["VHDL", "SystemVerilog", "C", "GLSL"],
    discriminators: ["module declaration", "always @(posedge clk)", "reg output", "nonblocking assignment <="],
    explanation: "This is Verilog. module declarations, always @(posedge clk), reg outputs, and <= nonblocking assignments identify it.",
    code: `module counter(
  input wire clk,
  input wire reset,
  output reg [3:0] value
);

always @(posedge clk) begin
  if (reset)
    value <= 4'b0000;
  else
    value <= value + 1'b1;
end

endmodule`,
  }
];

export default verilog;
