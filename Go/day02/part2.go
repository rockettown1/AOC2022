package main

import (
	"adventofcode/packages/utils"
)

func part2() int {
	contentSlice := utils.GetPuzzleInput("day02")
	total := 0

	results := map[string]map[string]int{
		"A": {"X": 3, "Y": 4, "Z": 8},
		"B": {"X": 1, "Y": 5, "Z": 9},
		"C": {"X": 2, "Y": 6, "Z": 7},
	}

	for _, v := range contentSlice {
		them := string(v[0])
		you := string(v[2])

		total += results[them][you]
	}
	return total
}
