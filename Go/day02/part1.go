package main

import (
	"adventofcode/packages/utils"
)

func part1() int {

	contentSlice := utils.GetPuzzleInput("day02")
	total := 0

	results := map[string]map[string]int{
		"A": {"X": 4, "Y": 8, "Z": 3},
		"B": {"X": 1, "Y": 5, "Z": 9},
		"C": {"X": 7, "Y": 2, "Z": 6},
	}

	for _, v := range contentSlice {
		them := string(v[0])
		you := string(v[2])

		total += results[them][you]
	}
	return total
}
