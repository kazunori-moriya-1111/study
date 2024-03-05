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
    <div id="calendar" class="w-90"></div>
    <script>
        calendar_items = <?php echo json_encode($calendar_items) ?>;
    </script>
</body>

</html>