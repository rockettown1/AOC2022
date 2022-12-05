/*
Turns this:

[V]         [T]         [J]        
[Q]         [M] [P]     [Q]     [J]
[W] [B]     [N] [Q]     [C]     [T]
[M] [C]     [F] [N]     [G] [W] [G]
[B] [W] [J] [H] [L]     [R] [B] [C]
[N] [R] [R] [W] [W] [W] [D] [N] [F]
[Z] [Z] [Q] [S] [F] [P] [B] [Q] [L]
[C] [H] [F] [Z] [G] [L] [V] [Z] [H]
 1   2   3   4   5   6   7   8   9 

 Into this:

 const stacks = {
  '1': ['C', 'Z', 'N', 'B', 'M', 'W', 'Q', 'V'],
  '2': ['H', 'Z', 'R', 'W', 'C', 'B' ],
  '3': ['F', 'Q', 'R', 'J' ],
  '4': ['Z', 'S', 'W', 'H', 'F', 'N','M', 'T'],
  '5': ['G', 'F', 'W', 'L', 'N', 'Q', 'P'],
  '6': ['L', 'P', 'W' ],
  '7': ['V', 'B', 'D', 'R', 'G', 'C', 'Q', 'J'],
  '8': ['Z', 'Q', 'N', 'B', 'W'],
  '9': ['H', 'L', 'F', 'C', 'G', 'T', 'J']
}

*/

export function transposeAndMap(input: string): { [k: number]: string[] } {
  let arr = input.split("\n");
  let j = arr
    .slice(0, arr.length - 1)
    .map((str) => str.match(/(\w|\s{3})\s?/g)!.map((str) => str.trim()));
  //transpose array
  let output = j[0].map((_, colIndex) => j.map((row) => row[colIndex]));

  const stacks: { [k: number]: string[] } = {};

  for (let i = 1; i < output.length + 1; i++) {
    stacks[i] = output[i - 1].reverse().filter((str) => str != "");
  }
  return stacks;
}
