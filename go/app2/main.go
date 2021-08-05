package main

import (
	"app2/foo"
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
	//浮動小数点リテラル
	fmt.Println(1.0e2)
	//浮動小数点の範囲
	fmt.Println(float32(1.0) / float32(3.0))
	fmt.Println(float64(1.0) / float64(3.0))
	//複素数型
	c1 := 1.0 + 3i
	c2 := complex(1.0, 3)
	fmt.Println(c1, c2)
	//実部と虚部の取り出し
	fmt.Println("real(c1):", real(c1))
	fmt.Println("imag(c1):", imag(c1))
	//ルーン(rune)型
	r := '松'
	fmt.Printf("%v\n", r)
	//文字列(String)型
	s := "Goの文字列"
	fmt.Printf("%v\n", s)
	//RAW文字列リテラル
	s1 := `
	Goの
	RAW文字列リテラルによる
	複数行に渡る
	文字列
	`
	fmt.Printf("%v\n", s1)
	//配列型
	a := [5]int{1, 2, 3, 4, 5}
	fmt.Printf("%v\n", a)
	//配列要素へアクセス
	fmt.Printf("%v\n", a[0])
	//初期要素数の定義を少なくする（デフォルト値で補完）
	a1 := [5]int{1, 2, 3}
	fmt.Printf("%v\n", a1)
	//暗黙定義
	a2 := [5]int{}
	fmt.Printf("%v\n", a2)
	//要素数の定義省略
	a3 := [...]int{1, 2, 3}
	fmt.Printf("a3 %v\n", a3)
	//配列要素の代入
	a4 := [...]int{1, 2, 3}
	a4[0] = 0
	a4[2] = 0
	fmt.Printf("a4 %v\n", a4)
	//配列コピーはメモリが別れている
	a5 := [3]int{1, 2, 3}
	a6 := [3]int{4, 5, 6}
	a5 = a6
	fmt.Printf("a5代入前 %v\n", a5)
	a5[0] = 0
	a5[2] = 2
	fmt.Printf("a5代入後 %v\n", a5)
	fmt.Printf("a6 %v\n", a6)
	//interface{}型　全ての型と互換性あり 初期値は<nil> nullのようなもの
	var x1 interface{}
	fmt.Println(x1)
	x1 = 3.14
	x1 = "文字列"
	fmt.Println(x1)
	//数値を代入しても演算は不可
	var ax, bx interface{}
	ax, bx = 1, 2
	// z := ax + bx 演算できないのでエラー
	fmt.Println(ax, bx)
	//演算子
	s2 := "Taro" + " " + "Yamada"
	fmt.Printf("s2 %v\n", s2)
	//数値演算子
	fmt.Println(4 + 2)  //和
	fmt.Println(14 - 7) //差
	fmt.Println(3 * 7)  //積
	fmt.Println(12 / 4) //商
	fmt.Println(5 % 2)  //剰余
	//論理積（AND）
	n1 := 165 & 155
	fmt.Println(n1)
	//論理和（OR）
	n2 := 165 | 155
	fmt.Println(n2)
	//排他的論理和（XOR）
	n3 := 165 ^ 155
	fmt.Println(n3)
	//ビットクリア（AND NOT）
	n4 := 108 &^ 13
	fmt.Println(n4)
	//算術演算子と代入
	n5 := 0
	n5 += 10
	fmt.Println("n5:", n5)
	//比較演算子
	fmt.Println("1 == 1：", 1 == 1)
	fmt.Println("5 >= 7：", 5 >= 7)
	fmt.Println("6 != 2：", 6 != 2)
	fmt.Println("true != false：", true != false)
	//論理演算子
	T := true
	F := false
	fmt.Println("T && F:", T && F)
	fmt.Println("T || F:", T || F)
	fmt.Println("!T:", !T)
	//定義した関数を使用
	fmt.Println(puls(1, 2))
	hello()
	q1, r1 := div(19, 7)
	fmt.Printf("章 =%d 剰余 =%d\n", q1, r1)
	//戻り値の破棄
	q2, _ := div(19, 7)
	_, r2 := div(19, 7)
	fmt.Printf("章 =%d 剰余 =%d\n", q2, r2)
	x2, y2 := doSomething()
	fmt.Println("x2", x2, "y2", y2)
	//無名関数
	f := func(x, y int) int { return x + y }
	fmt.Println("f(2,3):", f(2, 3))
	fmt.Printf("%T\n", f)
	//fmt.Printf("%#v\n", func(x, y int) int { return x + y })
	fmt.Printf("%#v\n", func(x, y int) int { return x + y }(2, 3))
	var plusAlias = puls
	fmt.Printf("plusAlias(10, 5): %#v\n", plusAlias(10, 5))
	f1 := returnFunc()
	f1()
	callFunction(func() {
		fmt.Println("I'm a function")
	})
	f2 := later()

	fmt.Println("f2(\"Golang\"):", f2("Golang"))
	fmt.Println("f2(\"is\"):", f2("is"))
	fmt.Println("f2(\"awesome!\")", f2("awesome!"))

	ints := intergers()
	fmt.Println(ints())
	fmt.Println(ints())
	fmt.Println(ints())

	otherints := intergers()
	fmt.Println(otherints())
	//定数定義
	const X = 1
	const (
		Y = 2
		Z = 3
	)
	fmt.Println("X=", X, "Y=", Y, "Z=", Z)
	//定数の値省略
	const (
		X1 = 2
		Y1
		Z1
		S1 = "あ"
		S2
	)
	fmt.Println("X1=", X1, "Y1=", Y1, "Z1=", Z1, "S1=", S1, "S2=", S2)
	//定数式
	const Z2 = X + Y + Z
	fmt.Println("Z2=", Z2)
	//iota
	const (
		A = iota
		B
		C
	)
	fmt.Println("A =", A, "B =", B, "C =", C)
	//iotaの増分確認
	const (
		A1 = 1 + iota
		B1
		C1
		N = iota
	)
	fmt.Println("A1 =", A1, "B1 =", B1, "C1 =", C1, "N = ", N)
	//iotaの中断動作
	const (
		A2 = iota
		B2
		C2
		D2 = 17
		E2 = iota
		F2
	)
	fmt.Println("A2 =", A2, "B2 =", B2, "C2 =", C2, "D2 = ", D2, "E2 = ", E2, "F2 =", F2)
	fmt.Println(foo.MAX)
	// fmt.Println(foo.internal_const)　コンパイルエラー
	fmt.Println(foo.FooFuunc(5))
	// fmt.Println(foo.internalFunc(5)) コンパイルエラー
}

//関数定義
func puls(x, y int) int {
	return x + y
}

//戻り値がない関数
func hello() {
	fmt.Println("Hello kansu")
	return
}

//戻り値が複数の関数
func div(a, b int) (int, int) {
	q := a / b
	r := a % b
	return q, r
}

//戻り値を表す変数
func doSomething() (x, y int) {
	y = 5
	return
}

//関数を返す関数
func returnFunc() func() {
	return func() {
		fmt.Println("I'm a function")
	}
}

//関数を引数に取る関数
func callFunction(f func()) {
	f()
}

//クロージャーとしての無名関数
func later() func(string) string {
	//一つ前に与えられた文字列を保存するための変数
	var store string
	//引数に文字列をとり文字列を返す関数を返す
	return func(next string) string {
		s := store
		store = next
		return s
	}
}

//ジェネレーターの振る舞いをしたクロージャー
func intergers() func() int {
	i := 0
	return func() int {
		i += 1
		return i
	}
}

func one() int {
	return 1
}
