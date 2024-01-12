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

// 関数作成
echo "<br>";
echo "関数作成<br>";

$numbers = [1, 2, 3, 4];
$numbers2 = [1, 2, 3];

function sum($nums)
{
    $sum = 0;
    foreach ($nums as $num) {
        $sum += $num;
    }
    return $sum;
}

$result =  sum($numbers);
echo "合計：{$result}<br>";
sum($numbers2);

/** DocComment
 * 税率計算のための関数を記述するためのファイル
 * 
 * @author moriya
 * @since 1.0.0
 */
$price = 1000;

/**
 * 税込金額を取得する関数
 * 
 * @param int $base_price 価格
 * @param float $tax_rate 税率
 * 
 * @return int 税込金額
 */
// function with_tax($base_price, $tax_rate = 0.1)
// {
//     $sum_price = $base_price + ($base_price * $tax_rate);
//     $sum_price = round($sum_price);
//     return $sum_price;
// }
// $fn = "with_tax";
// $price = $fn($price, 0.2);
// echo $price;
// echo "<be>";

// 条件分岐省略記法
echo "<br>";
echo "条件分岐省略記法<br>";
$arry = ['' => 10];

// if (isset($arry['key'])) {
//     $arry['key'] *= 10;
// } else {
//     $arry['key'] = 1;
// }
// $arry['key'] = $arry['key'] ?? 1;
$arry['key'] = isset($arry['key']) ? $arry['key'] *= 10 : $arry['key'] = 1;
echo $arry['key'];

// 定数
echo "<br>";
echo "定数<br>";
// const TAX_RATE = 0.1;
// if (!defined('TAX_RATE'))
//     define('TAX_RATE', 0.1);
// function with_tax($base_price, $tax_rate = TAX_RATE)
// {
//     $sum_price = $base_price + ($base_price * $tax_rate);
//     $sum_price = round($sum_price);
//     return $sum_price;
// }

// ファイル分割
echo "<br>";
echo "ファイル分割<br>";

$arry = [
    'num' => 0
];

require('file1.php');
require('file1.php');
require('file1.php');
include('file1.php');
require('file2.php');
// fn1();

echo ($arry['num']);

// パスの書き方
echo "<br>";
echo "パスの書き方<br>";
require('file1.php');
require('second/koko.php');
echo __DIR__;
echo __FILE__;
echo dirname(__FILE__, 2);

// 名前空間
echo "<br>";
echo "名前空間<br>";
require_once 'lib.php';

use function lib\with_tax;
use const lib\sub\TAX_RATE;

$price = with_tax(1000);
echo $price;
echo TAX_RATE;

// クラスの基礎
echo "<br>";
echo "クラスの基礎<br>";
class Person
{
    protected $name;
    public $age;
    public static $whereToLive = 'earth';

    function __construct($name, $age)
    {
        $this->name = $name;
        $this->age = $age;
    }
    function hello()
    {
        echo 'hello, ' . $this->name;
        echo static::$whereToLive;
        static::bye();
        return $this;
    }
    static function bye()
    {
        echo 'bey';
    }
}

$bob = new Person('Bob', 18);
// echo $bob->name;
echo $bob->age;
$bob->hello()->bye();
Person::bye();

// クラス継承
echo "<br>";
echo "クラス継承<br>";

class Japanese extends Person
{
    function __construct($name, $age)
    {
        $this->name = $name;
        $this->age = 30;
    }
    function hello()
    {
        echo 'こんにちは, ' . $this->name;
        return $this;
    }
}
$taro = new Japanese('太郎', 18);
$taro->hello();
echo $taro->age;
