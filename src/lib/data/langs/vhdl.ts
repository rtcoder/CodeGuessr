import type { CodeQuestion } from '$lib/types';

const vhdl: CodeQuestion[] = [
  {
    id: "vhdl-entity-architecture",
    language: "VHDL",
    aliases: ["vhdl"],
    difficulty: "insane",
    category: "hardware",
    quizSuitability: "excellent",
    highlightLanguage: "vhdl",
    confusionGroup: ["Verilog", "SystemVerilog", "Ada", "TLA+"],
    discriminators: ["library ieee/use clauses", "entity/architecture split", "std_logic ports", "rising_edge"],
    explanation: "This is VHDL. entity/architecture structure, std_logic, IEEE libraries, and rising_edge are VHDL hardware-design clues.",
    code: `library ieee;
use ieee.std_logic_1164.all;

entity counter is
  port (
    clk : in std_logic;
    q   : out std_logic_vector(3 downto 0)
  );
end counter;

architecture rtl of counter is
begin
  process(clk)
  begin
    if rising_edge(clk) then
      q <= q + 1;
    end if;
  end process;
end rtl;`,
  },
  {
    id: "vhdl-generic-map",
    language: "VHDL",
    aliases: ["vhdl"],
    difficulty: "insane",
    category: "hardware",
    quizSuitability: "excellent",
    highlightLanguage: "vhdl",
    confusionGroup: ["Verilog","SystemVerilog","Ada","TLA+"],
    discriminators: ["generic declaration","port map","std_logic_vector","entity instantiation"],
    explanation: "This is VHDL. This snippet uses a distinct VHDL idiom: generic declaration, port map, std_logic_vector.",
    code: `entity top is end entity;

architecture rtl of top is
  signal data : std_logic_vector(7 downto 0);
begin
  u_fifo: entity work.fifo
    generic map (WIDTH => 8)
    port map (din => data);
end architecture;`,
  },
  {
    id: "vhdl-case-state-machine",
    language: "VHDL",
    aliases: ["vhdl"],
    difficulty: "insane",
    category: "hardware",
    quizSuitability: "excellent",
    highlightLanguage: "vhdl",
    confusionGroup: ["Verilog","SystemVerilog","Ada","TLA+"],
    discriminators: ["case statement","enumerated state type","process sensitivity list","when others"],
    explanation: "This is VHDL. This snippet uses a distinct VHDL idiom: case statement, enumerated state type, process sensitivity list.",
    code: `type state_t is (Idle, Busy, Done);
signal state : state_t := Idle;

process(clk) begin
  if rising_edge(clk) then
    case state is
      when Idle => state <= Busy;
      when Busy => state <= Done;
      when others => state <= Idle;
    end case;
  end if;
end process;`,
  }
];

export default vhdl;
