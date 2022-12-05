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
    const [first, second] = pair;
    const firstContainsSecond = first[0] <= second[0] && first[1] >= second[1];
    const secondContainsFirst = second[0] <= first[0] && second[1] >= first[1];

    if (firstContainsSecond || secondContainsFirst) {
      fullCount++;
    }
  }
  return fullCount;
}
