<?php
require_once 'datasource.php';

use db\DataSource;

try {
    $db = new DataSource();
    $result = $db->selectOne("select * from test_phpdb.mst_shops where id = :id", [
        ':id' => 1
    ]);
    var_dump($result);
} catch (Error $e) {
    echo $e;
}
