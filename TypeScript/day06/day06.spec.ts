import part1 from "./part1";
import part2 from "./part2";

describe("day06", () => {
  describe("Part 1", () => {
    it("should return 7", () => {
      expect(part1("mjqjpqmgbljsphdztnvjfqwrcgsmlb")).toEqual(7);
    });
    it("should return 5", () => {
      expect(part1("bvwbjplbgvbhsrlpgdmjqwftvncz")).toEqual(5);
    });
    it("should return 6", () => {
      expect(part1("nppdvjthqldpwncqszvftbrmjlhg")).toEqual(6);
    });
    it("should return 10", () => {
      expect(part1("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg")).toEqual(10);
    });
    it("should return 11", () => {
      expect(part1("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw")).toEqual(11);
    });
  });

  describe("Part 2", () => {
    it("should return 19", () => {
      expect(part2("mjqjpqmgbljsphdztnvjfqwrcgsmlb")).toEqual(19);
    });
  });
});
