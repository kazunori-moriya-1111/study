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
    <a href="{{ route('manegement.calendar') }}" class="text-blue-500 underline">カレンダー</a><br>
    <form name="form1" method="post" action="{{ route('manegement.totalling') }}">
        @csrf
        <input type="hidden" name="type" value="day">
        <a class="text-blue-500 underline" href="javascript:form1.submit()">収支</a>
    </form>
    <!-- <a href="{{ route('manegement.totalling', ['type' => 'day']) }}" class="text-blue-500 underline">収支</a><br> -->
    <a href="{{ route('tag.index') }}" class="text-blue-500 underline">タグ一覧</a><br>
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