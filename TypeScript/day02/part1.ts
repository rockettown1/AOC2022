import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day02");

export default function part1(input: string): number {
  let total = 0;

  let result: { [key: string]: { [key: string]: number } } = {
    A: { X: 4, Y: 8, Z: 3 },
    B: { X: 1, Y: 5, Z: 9 },
    C: { X: 7, Y: 2, Z: 6 },
  };

  input
    .split("\n")
    .map((pair) => pair.split(" "))
    .forEach((pair) => {
      const [them, you] = pair;
      total += result[them][you];
    });

  return total;
}
