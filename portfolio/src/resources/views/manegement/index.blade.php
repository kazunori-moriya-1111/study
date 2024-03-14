<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>Laravel</title>
</head>

<body>
    <x-nav-bar />
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
</body>

</html>