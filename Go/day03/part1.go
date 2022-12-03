package main

import (
	"adventofcode/packages/utils"
	"fmt"
	"strings"
)

func part1() int {
	fmt.Println("Part 1")
	contentSlice := utils.GetPuzzleInput("day03")

	alphabet := make([]string, 0)
	for i := 97; i < 26+97; i++ {
		alphabet = append(alphabet, string(i))
	}

	for i := 0; i < 26; i++ {
		alphabet = append(alphabet, strings.ToUpper(alphabet[i]))
	}

	final := make([]string, 0)

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

		final = append(final, common...)
	}

	p := 0
	for _, v := range final {
		for i, l := range alphabet {
			if v == l {
				p += i + 1
			}
		}
	}

	return p
}
