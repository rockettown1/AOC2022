import { getPuzzleInput, createAlphabet } from "../utils";
const input = getPuzzleInput("day03");

export default function part1(input: string) {
  const arr = input.split("\n");
  const letters = createAlphabet();
  let final = 0;

  arr.forEach((line) => {
    const c1 = line.slice(0, line.length / 2).split("");
    const c2 = line.slice(line.length / 2).split("");
    const common = new Set<string>();

    c1.forEach((v) => c2.includes(v) && common.add(v));
    common.forEach((l) => (final += letters.indexOf(l) + 1));
  });

  return final;
}
