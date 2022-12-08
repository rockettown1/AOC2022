import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day08");

//Like part 1, this is a terrible solution as far as efficiency goes. Should refactor this!

export default function part2(input: string) {
  const grid = input
    .split("\n")
    .map((row) => row.split("").map((tree) => ({ val: +tree, score: 0 })));

  searchTrees(grid);

  const scores = [];
  for (const row of grid) {
    for (const tree of row) {
      scores.push(tree.score);
    }
  }
  return Math.max(...scores);
}

part2(input);

type Node = { val: number; score: number };

function searchTrees(grid: Node[][]) {
  let currentTree: Node;

  //look left
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      currentTree = grid[i][j];
      let scenicScore = 0;
      for (let k = j - 1; k >= 0; k--) {
        if (currentTree.val > grid[i][k].val) {
          scenicScore++;
        } else if (currentTree.val == grid[i][k].val || k == 0) {
          scenicScore++;
          break;
        }
      }
      currentTree.score = scenicScore;
    }
  }
  //look right
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = grid[i].length - 2; j > 0; j--) {
      currentTree = grid[i][j];
      let scenicScore = 0;
      for (let k = j + 1; k <= grid[i].length - 1; k++) {
        if (currentTree.val > grid[i][k].val) {
          scenicScore++;
        } else if (
          currentTree.val == grid[i][k].val ||
          k == grid[i].length - 1
        ) {
          scenicScore++;
          break;
        }
      }
      currentTree.score *= scenicScore;
    }
  }
  //look up
  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      currentTree = grid[i][j];
      let scenicScore = 0;
      for (let k = i - 1; k >= 0; k--) {
        if (currentTree.val > grid[k][j].val) {
          scenicScore++;
        } else if (currentTree.val == grid[k][j].val || k == 0) {
          scenicScore++;
          break;
        }
      }
      currentTree.score *= scenicScore;
    }
  }
  //look down
  for (let i = grid.length - 1; i > 0; i--) {
    for (let j = 1; j < grid[i].length - 2; j++) {
      let currentTree = grid[i][j];
      let scenicScore = 0;
      for (let k = i + 1; k <= grid.length - 1; k++) {
        if (currentTree.val > grid[k][j].val) {
          scenicScore++;
        } else if (currentTree.val == grid[k][j].val || k == grid.length - 1) {
          scenicScore++;
          break;
        }
      }
      currentTree.score *= scenicScore;
    }
  }
}
