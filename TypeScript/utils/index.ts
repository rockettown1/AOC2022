import fs from "fs";
import path from "path";

export function getPuzzleInput(day: string): string {
  return fs.readFileSync(path.join(__dirname, `../${day}/puzzleInput.txt`));
}
