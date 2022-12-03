import { getPuzzleInput, createAlphabet } from "../utils";
const input = getPuzzleInput("day03");

export default function part1(input: string) {
  const arr = input.split("\n");
  const letters = createAlphabet();
  let final: any[] = [];

  arr.forEach((line) => {
    const c1 = line.slice(0, line.length / 2).split("");
    const c2 = line.slice(line.length / 2).split("");
    const common = new Set<string>();

    c1.forEach((v) => c2.indexOf(v) !== -1 && common.add(v));
    final = [...final, ...common];
  });

  return final
    .map((letter) => letters.join("").indexOf(letter) + 1)
    .reduce((total, current) => total + current);
}
