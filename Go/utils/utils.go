package utils

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strings"
)

func GetPuzzleInput(d string) []string {
	content := ReadLines(fmt.Sprintf("../%v/puzzleInput.txt", d))

	return content
}

func ReadLines(filename string) []string {
	file, err := os.Open(filename)
	Check(err)
	defer file.Close()
	scanner := bufio.NewScanner(file)
	scanner.Split(bufio.ScanLines)
	lines := make([]string, 0)
	for scanner.Scan() {
		line := scanner.Text()
		lines = append(lines, line)
	}
	Check(scanner.Err())
	return lines
}

func Check(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

func Sum(s []int) int {
	sum := 0
	for _, v := range s {
		sum += v
	}
	return sum
}

func Contains(elems []string, v string) bool {
	for _, s := range elems {
		if v == s {
			return true
		}
	}
	return false
}

func CreateAlphabet() []string {
	alphabet := make([]string, 0)

	for i := 97; i < 26+97; i++ {
		alphabet = append(alphabet, string(i))
	}
	for i := 0; i < 26; i++ {
		alphabet = append(alphabet, strings.ToUpper(alphabet[i]))
	}

	return alphabet
}
