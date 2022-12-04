package main

import (
	"adventofcode/packages/utils"
	"strings"
)

func part2() int {
	content := utils.GetPuzzleInput("day04")
	c := 0
	for _, line := range content {
		parts := strings.Split(line, ",")

		n1, n2 := utils.ToInts(strings.Split(parts[0], "-")), utils.ToInts(strings.Split(parts[1], "-"))
		if n1[1] >= n2[0] && n2[1] >= n1[0] {
			c++
		}

	}

	return c
}
