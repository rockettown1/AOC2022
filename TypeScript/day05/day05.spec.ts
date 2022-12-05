import part1 from "./part1";
import part2 from "./part2";

const testInput = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

describe("day05", () => {
  describe("Part 1", () => {
    it("should return CMZ", () => {
      expect(part1(testInput)).toEqual("CMZ");
    });
  });
  describe("Part 2", () => {
    it("should return MCD", () => {
      expect(part2(testInput)).toEqual("MCD");
    });
  });
});
