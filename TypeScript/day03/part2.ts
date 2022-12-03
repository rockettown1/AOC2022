import { getPuzzleInput, createAlphabet } from "../utils";
const input = getPuzzleInput("day03");

export default function part2(input: string) {
  const arr = input.split("\n");
  const letters = createAlphabet();
  let groups: string[][] = [];
  const priorities: any[] = [];

  while (arr.length > 0) {
    groups = [...groups, arr.splice(0, 3)];
  }

  groups.forEach((group) => {
    const common = new Set<string>();
    const [r1, r2, r3] = group;

    r1.split("").forEach((v) => r2.indexOf(v) !== -1 && common.add(v));
    common.forEach((v) => r3.indexOf(v) !== -1 && priorities.push(v));
  });

  return priorities
    .map((letter) => letters.join("").indexOf(letter) + 1)
    .reduce((total, curr) => total + curr);
}

console.log(part2(input));
