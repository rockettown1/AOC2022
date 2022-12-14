import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day13");

export default function part1(input: string) {
  let pairs = input.split("\n\n").map((pair) => {
    const [left, right] = pair.split("\n").map((side) => JSON.parse(side));
    return { left, right };
  });
  let results: boolean[] = [];

  for (const pair of pairs) {
    const { left, right } = pair;
    compare(left, right, results);
  }

  return sumIndices(results);
}

export function compare(
  left: number | number[],
  right: number | number[],
  results: boolean[]
) {
  let initialResults = results.length;
  const leftIsNumber = typeof left === "number";
  const rightIsNumber = typeof right === "number";
  if (leftIsNumber && rightIsNumber) {
    if (left < right) {
      results.push(true);
      return;
    }
    if (left > right) {
      results.push(false);
      return;
    }
  } else if (!leftIsNumber && !rightIsNumber) {
    let i = 0;
    while (true) {
      if (i > left.length - 1 && i <= right.length - 1) {
        results.push(true);
        return;
      } else if (i <= left.length - 1 && i > right.length - 1) {
        results.push(false);
        return;
      } else if (i > left.length - 1 && i > right.length - 1) {
        return;
      }

      compare(left[i], right[i], results);

      //if we've added a result then return
      if (results.length !== initialResults) {
        return;
      }
      i++;
    }
  } else {
    if (leftIsNumber) {
      compare([left], right, results);
    } else if (rightIsNumber) {
      compare(left, [right], results);
    }
  }
}

function sumIndices(results: boolean[]): number {
  return results.reduce(
    (total, current, i) => (current ? (total += i + 1) : total),
    0
  );
}
