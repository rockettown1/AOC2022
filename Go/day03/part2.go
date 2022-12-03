package main

import (
	"adventofcode/packages/utils"
	"strings"
)

func part2() int {
	content := utils.GetPuzzleInput("day03")
	groups := make([][]string, 0)
	alphabet := utils.CreateAlphabet()
	p := 0

	for i := 0; i < len(content); i += 3 {
		groups = append(groups, content[i:i+3])
	}

	for _, g := range groups {
		common := make(map[string]bool, 0)
		r1, r2, r3 := g[0], g[1], g[2]

		for _, v1 := range r1 {
			if strings.Contains(r2, string(v1)) {
				common[string(v1)] = true
			}
		}
		for v2 := range common {
			if strings.Contains(r3, v2) {
				for i, l := range alphabet {
					if v2 == l {
						p += i + 1
					}
				}
			}
		}
	}

	return p
}
