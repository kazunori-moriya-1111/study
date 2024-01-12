<?php
$url = $_SERVER['REQUEST_URI'];
echo $url;
define('BASE_CONTEXT_PATH', $url);
define('BASE_IMAGE_PATH', BASE_CONTEXT_PATH . 'images/');
