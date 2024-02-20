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
    <a href="{{ route('manegement.create') }}" class="text-blue-500 underline">新規登録</a><br>
    <div class="w-80">
        <canvas id="myChart"></canvas>
    </div>
    @foreach($data as $row)
    <p>{{ $row }}</p>
    @endforeach
    <script>
        data = <?php echo json_encode($graph) ?>;
    </script>
</body>

</html>