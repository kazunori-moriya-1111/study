<?php

use Illuminate\Support\Js;

$json_array = Js::from($json_array);
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite(['resources/css/app.css','resources/css/calender.css' , 'resources/js/app.js', 'resources/js/calendar.js'])
    <title>Laravel</title>
</head>

<body>
    <div>ボートレース収支管理アプリ_calendar</div>
    <x-nav-bar />
    <a href="{{ route('manegement.index') }}" class="text-blue-500 underline">TOPへ</a><br>
    <div id="calendar" class="w-90"></div>
    <script>
        json_array = <?php echo $json_array ?>;
    </script>
</body>

</html>