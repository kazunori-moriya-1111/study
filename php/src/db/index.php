<?php

$user = 'test_user';
$pwd = 'pwd';
$host = "mysql5.7-trial2";
$dbName = 'test_phpdb';
$dsn = "mysql:host={$host};port=3306;dbname={$dbName};";
$conn = new PDO($dsn, $user, $pwd);
$conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
$pst = $conn->query('select * from mst_shops');
$result = $pst->fetchAll();

echo '<pre>';
print_r($result);
echo '<pre>';

$conn = null;
