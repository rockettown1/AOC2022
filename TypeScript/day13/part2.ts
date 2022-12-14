import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day13");

export default function part2(input: string) {
  let lines = input
    .replace(/\n\n/g, "\n")
    .split("\n")
    .map((pair) => JSON.parse(pair));

  let linesWithKeys = [...lines, [[2]], [[6]]];

  linesWithKeys.sort((a, b) => {
    const results: boolean[] = [];
    compare(a, b, results);
    return results[results.length - 1] ? -1 : 1;
  });

  //convert each line back to a string
  const asStrings = linesWithKeys.map((line) => JSON.stringify(line));
  const key1 = asStrings.indexOf(`[[2]]`) + 1;
  const key2 = asStrings.indexOf(`[[6]]`) + 1;

  return key1 * key2;
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
