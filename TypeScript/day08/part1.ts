import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day08");

// 🤮 Ignoring how inefficient this solution is, at least it works 🤷‍♂️

export default function part1(input: string) {
  const lines = input.split("\n");
  return visibleTrees(lines);
}

function visibleTrees(lines: string[]) {
  let grid = addVisibility(lines);

  visibleFromLeft(grid);
  visibleFromRight(grid);
  visibleFromTop(grid);
  visibleFromBottom(grid);

  let count = 0;
  for (const row of grid) {
    for (const val of row) {
      if (val.visible) {
        count++;
      }
    }
  }

  return count;
}

function addVisibility(lines: string[]) {
  const grid = lines.map((line) =>
    line.split("").map((item, index, arr) => {
      if (index === 0 || index === arr.length - 1) {
        return { val: +item, visible: true };
      }
      return { val: +item, visible: false };
    })
  );

  for (let i = 0; i < grid.length; i++) {
    if (i === 0 || i === grid.length - 1) {
      grid[i].map((item) => (item.visible = true));
    }
  }
  return grid;
}

function visibleFromLeft(grid: any) {
  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[i].length; j++) {
      for (let k = j - 1; k >= 0; k--) {
        if (grid[i][j].val == grid[i][k].val) {
          break;
        }
        if (grid[i][j].val < grid[i][k].val) {
          break;
        }
        if (k === 0) {
          grid[i][j].visible = true;
        }
      }
    }
  }
}

function visibleFromRight(grid: any) {
  for (let i = 1; i < grid.length; i++) {
    for (let j = grid[i].length - 2; j > 0; j--) {
      for (let k = j + 1; k < grid[i].length; k++) {
        if (grid[i][j].val == grid[i][k].val) {
          break;
        }
        if (grid[i][j].val < grid[i][k].val) {
          break;
        }
        if (k === grid[i].length - 1) {
          grid[i][j].visible = true;
        }
      }
    }
  }
}

function visibleFromTop(grid: any) {
  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[i].length; j++) {
      for (let k = i - 1; k >= 0; k--) {
        if (grid[i][j].val == grid[k][j].val) {
          break;
        }

        if (grid[i][j].val < grid[k][j].val) {
          break;
        }
        if (k === 0) {
          grid[i][j].visible = true;
        }
      }
    }
  }
}

function visibleFromBottom(grid: any) {
  for (let i = grid.length - 1; i > 0; i--) {
    for (let j = 1; j < grid[i].length; j++) {
      for (let k = i + 1; k < grid.length; k++) {
        if (grid[i][j].val == grid[k][j].val) {
          break;
        }

        if (grid[i][j].val < grid[k][j].val) {
          break;
        }
        if (k === grid.length - 1) {
          grid[i][j].visible = true;
        }
      }
    }
  }
}
