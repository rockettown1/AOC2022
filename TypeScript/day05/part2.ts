import { transposeToMap } from ".";
import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day05");

export default function part2(input: string) {
  const stacks = transposeToMap(
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
    const move = stacks[from].splice(stacks[from].length - num);
    stacks[to].push(...move);
  }

  const tops = [];
  for (const s in stacks) {
    tops.push(stacks[s][stacks[s].length - 1]);
  }
  return tops.join("");
}
