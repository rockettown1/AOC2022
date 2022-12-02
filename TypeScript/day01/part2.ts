import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day01");

export default function part2(input: string) {
  return input
    .split("\n\n")
    .map((elf) =>
      elf
        .split("\n")
        .map((item) => Number(item))
        .reduce((total, current) => total + current)
    )
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((total, current) => total + current);
}
