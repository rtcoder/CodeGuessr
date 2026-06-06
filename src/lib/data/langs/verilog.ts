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
  },
  {
    id: "verilog-generate-loop",
    language: "Verilog",
    aliases: ["verilog"],
    difficulty: "insane",
    category: "hardware",
    quizSuitability: "excellent",
    highlightLanguage: "verilog",
    confusionGroup: ["VHDL","SystemVerilog","C","GLSL"],
    discriminators: ["generate block","genvar","for generate loop","assign statement"],
    explanation: "This is Verilog. This snippet uses a distinct Verilog idiom: generate block, genvar, for generate loop.",
    code: `module fanout #(parameter N = 4) (input wire source, output wire [N-1:0] out);
  genvar i;
  generate
    for (i = 0; i < N; i = i + 1) begin : lanes
      assign out[i] = source;
    end
  endgenerate
endmodule`,
  },
  {
    id: "verilog-casez-decoder",
    language: "Verilog",
    aliases: ["verilog"],
    difficulty: "insane",
    category: "hardware",
    quizSuitability: "excellent",
    highlightLanguage: "verilog",
    confusionGroup: ["VHDL","SystemVerilog","C","GLSL"],
    discriminators: ["casez statement","combinational always @*","wildcard bit patterns","reg assignment with blocking ="],
    explanation: "This is Verilog. This snippet uses a distinct Verilog idiom: casez statement, combinational always @*, wildcard bit patterns.",
    code: `module priority_decode(
  input wire [3:0] request,
  output reg [1:0] grant
);

always @* begin
  casez (request)
    4'b1???: grant = 2'd3;
    4'b01??: grant = 2'd2;
    4'b001?: grant = 2'd1;
    default: grant = 2'd0;
  endcase
  end
endmodule`,
  }
];

export default verilog;
