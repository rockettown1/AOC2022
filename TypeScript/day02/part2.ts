import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day02");

export default function part2(input: string): number {
  let total = 0;

  let result: { [key: string]: { [key: string]: number } } = {
    A: { X: 3, Y: 4, Z: 8 },
    B: { X: 1, Y: 5, Z: 9 },
    C: { X: 2, Y: 6, Z: 7 },
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
