<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>Laravel</title>
</head>

<body>
    <div>ボートレース収支管理アプリ</div>
    <div>
        <canvas id="myChart"></canvas>
    </div>
    <script>
        data = <?php echo json_encode($data) ?>;
    </script>
</body>

</html>