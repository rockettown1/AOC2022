import { transposeAndMap } from ".";
import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day05");

export default function part1(input: string) {
  const stacks = transposeAndMap(
    input.slice(0, input.indexOf("move")).trimEnd()
  );

  const instructions: number[][] = input
    .slice(input.indexOf("move"))
    .split("\n")
    .map((str) => str.split(" "))
    .map((row) =>
      row.filter((item) => parseInt(item)).map((item) => Number(item))
    );

  for (const run of instructions) {
    const [num, from, to] = run;
    let i = 0;
    while (i < num) {
      stacks[to].push(stacks[from].pop()!);
      i++;
    }
  }

  const tops = [];
  for (const s in stacks) {
    tops.push(stacks[s][stacks[s].length - 1]);
  }

  return tops.join("");
}
