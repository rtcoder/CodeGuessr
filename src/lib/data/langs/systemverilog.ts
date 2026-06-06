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
  },
  {
    id: "systemverilog-class-randomize",
    language: "SystemVerilog",
    aliases: ["systemverilog","system verilog","sv"],
    difficulty: "insane",
    category: "hardware",
    quizSuitability: "excellent",
    highlightLanguage: "verilog",
    confusionGroup: ["Verilog","VHDL","C++","GLSL"],
    discriminators: ["class declaration","rand field","constraint block","randomize method"],
    explanation: "This is SystemVerilog. This snippet uses a distinct SystemVerilog idiom: class declaration, rand field, constraint block.",
    code: `class Packet;
  rand bit [7:0] opcode;
  constraint valid_opcode { opcode inside {[1:10]}; }
endclass

Packet packet = new();
initial void'(packet.randomize());`,
  },
  {
    id: "systemverilog-assert-property",
    language: "SystemVerilog",
    aliases: ["systemverilog","system verilog","sv"],
    difficulty: "insane",
    category: "hardware",
    quizSuitability: "excellent",
    highlightLanguage: "verilog",
    confusionGroup: ["Verilog","VHDL","C++","GLSL"],
    discriminators: ["property declaration","assert property","posedge clock event","disable iff"],
    explanation: "This is SystemVerilog. This snippet uses a distinct SystemVerilog idiom: property declaration, assert property, posedge clock event.",
    code: `property request_ack;
  @(posedge clk) disable iff (!rst_n)
    req |-> ##[1:3] ack;
endproperty

assert property (request_ack);`,
  }
];

export default systemverilog;
