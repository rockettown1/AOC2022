package main

import (
	"adventofcode/packages/utils"
	"sort"
	"strconv"
)

func part2() int {
	contentSlice := utils.GetPuzzleInput("day01")
	groups := make([][]int, 0)
	current := make([]int, 0)
	for _, v := range contentSlice {
		num, err := strconv.Atoi(v)
		if err != nil {
			groups = append(groups, current)
			current = make([]int, 0)
		} else {
			current = append(current, num)
		}
	}

	t := make([]int, 0)
	for _, v := range groups {
		t = append(t, utils.Sum(v))
	}

	sort.Sort(sort.Reverse(sort.IntSlice(t)))
	t3 := t[0:3]
	return utils.Sum(t3)
}
