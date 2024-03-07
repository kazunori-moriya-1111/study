<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite(['resources/css/app.css','resources/js/app.js', 'resources/js/chartjs.js'])
    <title>Laravel</title>
</head>

<body>
    <div>ボートレース収支管理アプリ_totalling</div>
    <a href="{{ route('manegement.index') }}" class="text-blue-500 underline">TOPへ</a><br>
    <div class="mx-atuo w-1/2">
        <canvas class="" id="myChart"></canvas>
    </div>
    <script>
        data = <?php echo json_encode($graph) ?>;
    </script>
</body>

</html>