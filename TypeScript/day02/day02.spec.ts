import part1 from "./part1";
import part2 from "./part2";

const testInput = `A Y
B X
C Z`;

describe("Day 2", () => {
  describe("Part 1", () => {
    it("should return 15", () => {
      expect(part1(testInput)).toEqual(15);
    });
  });
  describe("Part 2", () => {
    it("should return 12", () => {
      expect(part2(testInput)).toEqual(12);
    });
  });
});
