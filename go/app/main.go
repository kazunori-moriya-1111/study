package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println("Hello golang from docker!")
	fmt.Println(math.Pi)
	fmt.Printf("数値 =%d\n", 5)
	//暗黙的な定義
	i := 1
	fmt.Println(i)
	//関数の戻り値の型で暗黙的に定義
	x := one()
	fmt.Println(x)
	//型変換
	n := 1
	b := byte(n)
	i64 := int64(n)
	u32 := uint32(n)
	fmt.Printf("%T:%d\n", n, n)
	fmt.Printf("%T:%d\n", b, b)
	fmt.Printf("%T:%d\n", i64, i64)
	fmt.Printf("%T:%d\n", u32, u32)
	//ラップアラウンド　オーバーフロー対策のための最大値確認
	fmt.Printf("unit32 max value = %d\n", math.MaxUint32)
}

func one() int {
	return 1
}
