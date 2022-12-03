import { getPuzzleInput, createAlphabet } from "../utils";
const input = getPuzzleInput("day03");

export default function part2(input: string) {
  const arr = input.split("\n");
  const letters = createAlphabet();
  let groups: string[][] = [];
  let priorities = 0;

  while (arr.length > 0) {
    groups = [...groups, arr.splice(0, 3)];
  }

  groups.forEach((group) => {
    const common = new Set<string>();
    const [r1, r2, r3] = group;

    r1.split("").forEach((v) => r2.includes(v) && common.add(v));
    common.forEach((v) => {
      if (r3.includes(v)) priorities += letters.indexOf(v) + 1;
    });
  });

  return priorities;
}
