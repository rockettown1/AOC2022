import part1 from "./part1";
import part2 from "./part2";

const testInput = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

describe("day$day", () => {
  describe("Part 1", () => {
    it("should return 2", () => {
      expect(part1(testInput)).toEqual(2);
    });
  });
  describe("Part 2", () => {
    it("should return 4", () => {
      expect(part2(testInput)).toEqual(4);
    });
  });
});
