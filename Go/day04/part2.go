package main

import (
	"adventofcode/packages/utils"
	"strings"
)

/*
This is a working solution but I have no idea if it's idomatic Go code.
I expect to come back to this after getting more experience with Go.
*/

func part2() int {
	content := utils.GetPuzzleInput("day04")
	lines := make([][][]int, 0)
	c := 0
	for _, line := range content {
		temp := strings.Split(line, ",")
		p := make([][]int, 0)

		for _, v := range temp {
			arr := strings.Split(v, "-")
			nums := utils.ToInts(arr)
			p = append(p, nums)
		}

		lines = append(lines, p)
	}

	for _, line := range lines {
		a1, a2, b1, b2 := line[0][0], line[0][1], line[1][0], line[1][1]

		if a2 >= b1 && b2 >= a1 {
			c++
		}
	}

	return c
}
