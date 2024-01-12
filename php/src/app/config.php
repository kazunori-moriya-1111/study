<?php
$url = $_SERVER['REQUEST_URI'];
echo $url;
define('BASE_CONTEXT_PATH', '/app/');
define('BASE_IMAGE_PATH', BASE_CONTEXT_PATH . 'images/');
define('BASE_JS_PATH', BASE_CONTEXT_PATH . 'js/');
define('BASE_CSS_PATH', BASE_CONTEXT_PATH . 'css/');
