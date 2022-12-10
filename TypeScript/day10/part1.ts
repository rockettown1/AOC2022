import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day10");
import { testInput } from ".";

export default function part1(input: string) {
  let commands = input.split("\n").map((line) => {
    const instruction = line.split(" ");
    return { command: instruction[0], val: Number(instruction[1] || null) };
  });

  let X = 1;
  let cycles = 0;
  let signalStrength = [];
  let cycleCheck = 20;

  for (const c of commands) {
    let cycleCount = c.command === `addx` ? 2 : 1;
    for (let i = 0; i < cycleCount; i++) {
      cycles++;

      if (cycles === cycleCheck) {
        signalStrength.push(cycles * X);
        cycleCheck += 40;
      }

      if (i == cycleCount - 1) {
        X += c.val;
      }
    }
  }

  return signalStrength.reduce((total, current) => total + current, 0);
}
