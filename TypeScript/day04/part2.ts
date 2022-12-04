import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day04");

export default function part1(input: string) {
  const pairs = input
    .split("\n")
    .map((p) =>
      p.split(",").map((p) => p.split("-").map((item) => Number(item)))
    );
  let partialCount = 0;

  for (let pair of pairs) {
    const [a1, a2, b1, b2] = [pair[0][0], pair[0][1], pair[1][0], pair[1][1]];

    if (a2 >= b1 && b2 >= a1) {
      partialCount++;
    }
  }
  return partialCount;
}
