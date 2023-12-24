<?php

$user = 'test_user';
$pwd = 'pwd';
$host = "mysql5.7-trial2";
$dbName = 'test_phpdb';
$dsn = "mysql:host={$host};port=3306;dbname={$dbName};";
$conn = new PDO($dsn, $user, $pwd);
$conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$result = $conn->exec('update mst_prefs set name = "福島" where id = 5');

echo '<pre>';
print_r($result);
echo '<pre>';

$conn = null;
