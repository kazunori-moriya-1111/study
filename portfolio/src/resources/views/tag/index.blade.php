<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>Laravel</title>
    @livewireStyles
</head>

<body>
    <div>ボートレース収支管理アプリ_タグ一覧</div>
    <a href="{{ route('manegement.index') }}" class="text-blue-500 underline">TOPへ</a><br>
    <!-- タグ作成編集削除モーダルを分ける -->
    <!-- データ一覧表示 -->
    @foreach($data as $row)
    <p>{{ $row->name }}</p>
    <livewire:modal :name="$row->name" />
    @endforeach
    @livewireScripts
</body>

</html>