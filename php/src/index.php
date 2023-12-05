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

// 配列＆ループ
echo "<br>";
echo "配列＆ループ<br>";
$arry = ['tato', 'kesan', 'toshiya'];
$arry[1] = 'xsw';
$arry[] = 'kesan';
// var_dump(($arry));
// echo $arry[1];
for ($i = 0; $i < count($arry); $i++) {
    echo '<div>', $arry[$i], '</div>';
}
foreach ($arry as $i => $v) {
    echo '<div>', $i, $v, '</div>';
}
// 配列操作
echo "<br>";
echo "配列操作<br>";
$arry = [
    ['table', 1000], ['chiar', 100], ['bed', 5000]
];

// $arry[1][1] = 500;
// array_shift($arry);
// array_pop($arry);
array_splice($arry, 1, 1);

foreach ($arry as $val) {
    echo "{$val[0]}は{$val[1]}円です";
}

// 連想配列
echo "<br>";
echo "連想配列<br>";

$arry = ['name' => 'Bob', 'age' => 12, 'sports' => ['baseball', 'swimming']];
echo $arry['name'];
$arry['age'] += 24;
echo $arry['age'];
echo $arry['sports'][1];

// 正規表現
echo "<br>";
echo "正規表現<br>";

$char = 'ZAabd1_sscc';
if (preg_match("/[a-zA-z]{1,3}/i", $char, $result)) {
    echo '検索成功';
    print_r($result[0]);
} else {
    echo '検索失敗';
}
