import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day06");

export default function part2(input: string) {
  let windowSize = 4;
  let i = 0;
  let j = i + windowSize;

  while (j < input.length) {
    const slidingWindow = new Set(input.slice(i, j));
    if (slidingWindow.size === windowSize) break;
    i++;
    j++;
  }
  return j;
}
