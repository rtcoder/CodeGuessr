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
  }
];

export default vhdl;
