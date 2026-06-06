import type { CodeQuestion } from '$lib/types';

const systemverilog: CodeQuestion[] = [
  {
    id: "systemverilog-interface-always-ff",
    language: "SystemVerilog",
    aliases: ["systemverilog", "system verilog", "sv"],
    difficulty: "insane",
    category: "hardware",
    quizSuitability: "excellent",
    highlightLanguage: "verilog",
    confusionGroup: ["Verilog", "VHDL", "C++", "GLSL"],
    discriminators: ["interface declaration", "logic type", "always_ff", "modport"],
    explanation: "This is SystemVerilog. interface, logic, modport, and always_ff distinguish it from older Verilog.",
    code: `interface bus_if(input logic clk);
  logic valid;
  logic [31:0] data;
  modport master(output valid, output data, input clk);
endinterface

module producer(bus_if.master bus);
  always_ff @(posedge bus.clk) begin
    bus.valid <= 1'b1;
    bus.data <= bus.data + 32'd1;
  end
endmodule`,
  }
];

export default systemverilog;
