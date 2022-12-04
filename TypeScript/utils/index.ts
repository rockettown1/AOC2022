import fs from "fs";
import path from "path";

export function getPuzzleInput(day: string) {
  return fs.readFileSync(
    path.join(__dirname, `../../_inputs/${day}.txt`),
    "utf-8"
  );
}

export function createAlphabet(): string[] {
  let letters: string[] = [];
  for (let i = 97; i < 26 + 97; i++) {
    letters.push(String.fromCharCode(i));
  }
  for (let i = 0; i < 26; i++) {
    letters.push(letters[i].toUpperCase());
  }
  return letters;
}
