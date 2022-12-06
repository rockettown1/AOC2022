import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day06");

export default function part2(input: string) {
  let i = 0;
  let j = i + 14;

  while (j < input.length) {
    const slidingWindow = new Set(input.slice(i, j));
    if (slidingWindow.size === 14) break;
    i++;
    j++;
  }
  return j;
}
