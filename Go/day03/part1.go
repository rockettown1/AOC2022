package main

import (
	"adventofcode/packages/utils"
	"fmt"
	"strings"
)

func part1() int {
	fmt.Println("Part 1")
	contentSlice := utils.GetPuzzleInput("day03")

	alphabet := utils.CreateAlphabet()
	p := 0

	for _, v := range contentSlice {
		c1 := v[0 : len(v)/2]
		c2 := v[len(v)/2:]
		common := make([]string, 0)

		for _, c := range c1 {
			if strings.Contains(c2, string(c)) {
				if !utils.Contains(common, string(c)) {
					common = append(common, string(c))
				}
			}
		}

		for _, v := range common {
			for i, l := range alphabet {
				if v == l {
					p += i + 1
				}
			}
		}
	}

	return p
}
