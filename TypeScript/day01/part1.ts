import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day01");

export default function part1(input: string) {
  const sortedTotals = input
    .split("\n\n")
    .map((elf) =>
      elf
        .split("\n")
        .map((item) => Number(item))
        .reduce((total, current) => total + current)
    )
    .sort((a, b) => b - a);

  return sortedTotals[0];
}

part1(input);
