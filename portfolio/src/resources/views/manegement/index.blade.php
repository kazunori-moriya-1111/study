<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite(['resources/css/app.css', 'resources/js/app.js', 'resources/js/chartjs.js', 'resources/js/calendar.js'])
    <title>Laravel</title>
</head>

<body>
    <div>ボートレース収支管理アプリ</div>
    <a href="{{ route('manegement.create') }}" class="text-blue-500 underline">新規登録</a><br>
    <a href="{{ route('manegement.calendar') }}" class="text-blue-500 underline">収支</a><br>
    <a href="{{ route('tag.index') }}" class="text-blue-500 underline">タグ一覧</a><br>
    <div class="w-80">
        <canvas id="myChart"></canvas>
    </div>
    <div id="calendar" class="w-80"></div>
    <!-- データ一覧表示 -->
    @foreach($data as $row)
    <p>日付:{{ $row->date }} 掛け金:{{ $row->bet }} 払い戻し金:{{ $row->payout }}</p>
    <!-- タグデータ所持判定 -->
    @if(!($row->tags->isEmpty()))
    <!-- タグデータ一覧表示 -->
    @foreach($row->tags as $tag)
    <p>{{ $tag->name }}</p>
    @endforeach
    @endif
    <a class="text-blue-500 underline" href="{{ route('manegement.show', ['id' => $row->id ]) }}">詳細確認</a>
    @endforeach
    <script>
        data = <?php echo json_encode($graph) ?>;
    </script>
</body>

</html>