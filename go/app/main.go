package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println("Hello golang from docker!")
	fmt.Println(math.Pi)
	fmt.Printf("数値 =%d\n", 5)
	//明示的な定義
	var n int
	n = 8
	fmt.Println(n)
	//暗黙的な定義
	i := 1
	fmt.Println(i)
	//関数の戻り値の型で暗黙的に定義
	x := one()
	fmt.Println(x)
}

func one() int {
	return 1
}
