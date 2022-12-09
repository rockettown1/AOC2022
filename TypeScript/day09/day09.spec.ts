import part1 from "./part1";
import part2 from "./part2";

const testInput1 = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;

const testInput2 = `R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20`;

describe("day09", () => {
  describe("Part 1", () => {
    it("should return 13", () => {
      expect(part1(testInput1)).toEqual(13);
    });
  });
  describe("Part 2", () => {
    it("should return 1", () => {
      expect(part2(testInput1)).toEqual(1);
    });
    it("should return 36", () => {
      expect(part2(testInput2)).toEqual(36);
    });
  });
});
