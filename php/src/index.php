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
echo $j;
