package main

import (
	"adventofcode/packages/utils"
	"strconv"
	"strings"
)

/*
This is a working solution but I have no idea if it's idomatic Go code.
I expect to come back to this after getting more experience with Go.
*/

func part1() int {
	content := utils.GetPuzzleInput("day04")
	lines := make([][][]int, 0)
	c := 0
	for _, line := range content {

		//create new slice by splitting at comma
		temp := strings.Split(line, ",")
		p := make([][]int, 0)
		for _, v := range temp {

			//create slice of "numbers" splitting at hyphon
			arr := strings.Split(v, "-")
			nums := make([]int, 0)
			for _, a := range arr {

				//convert "numbers" to ints to perform proper comparison
				num, err := strconv.Atoi(a)
				utils.Check(err)
				nums = append(nums, num)
			}
			p = append(p, nums)
		}

		//each line now [][]int pair
		lines = append(lines, p)
	}

	//compare to find fully contained and update count
	for _, line := range lines {
		a1, a2, b1, b2 := line[0][0], line[0][1], line[1][0], line[1][1]

		if (a1 <= b1 && a2 >= b2) || (b1 <= a1 && b2 >= a2) {
			c++
		}
	}

	return c
}
