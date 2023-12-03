<?php
$name = 'Bob';
echo "he{$name}llo, $name\n<br>";
echo 'he{$name}llo, $name\n';
// 自己代入
$i = 1;
$j = 2;
$i = $i + $j;

// 自己代入演算子
$i += $j;

// インクリメント演算子
$i++;
echo $i;
echo "$j<br>";

// データ型
$i = 1;
$b = true;
$str = 'hello';

// データ型の確認方法
var_dump($b);
echo "<br>";
echo $i + $b;
echo "<br>";
var_dump($i === 1);

// 条件分岐の書き方
$score = 80;
$kesseki = 4;
if ($score < 50 || $kesseki >= 5) {
    echo "不合格";
} elseif ($score < 70) {
    echo "合格";
} else {
    echo "秀";
}
// ==と===の違い
if (1 === '1') {
    echo 'true';
} else {
    echo 'false';
}

// issetとempty
echo "<br>";
$a = null;
$b = 1;
if (isset($c)) {
    echo 'true';
} else {
    echo 'false';
}
echo "<br>";
if (empty($a)) {
    echo 'true';
} else {
    echo 'false';
}
