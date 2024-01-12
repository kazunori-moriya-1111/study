<?php
setcookie('VISIT_COUNT', 1, time() + 3600, '/');

var_dump($_COOKIE['VISIT_COUNT']);
