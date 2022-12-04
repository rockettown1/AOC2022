import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day04");

export default function part1(input: string) {
  const pairs = input
    .split("\n")
    .map((p) =>
      p.split(",").map((p) => p.split("-").map((item) => Number(item)))
    );
  let fullCount = 0;

  for (let pair of pairs) {
    const [a1, a2, b1, b2] = [pair[0][0], pair[0][1], pair[1][0], pair[1][1]];

    if ((a1 <= b1 && a2 >= b2) || (b1 <= a1 && b2 >= a2)) {
      fullCount++;
    }
  }
  return fullCount;
}
