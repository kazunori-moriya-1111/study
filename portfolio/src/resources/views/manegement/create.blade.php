<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>Laravel</title>
</head>

<body>
    <div>ボートレース収支管理アプリ_create</div>
    <a href="{{ route('manegement.index') }}" class="text-blue-500 underline">TOPへ</a><br>
    <form method="post" action="{{ route('manegement.store') }}">
        @csrf
        <label for="date">日付</label>
        <input type="date" id="date" name="date" />
        <br>
        <label for="bet">掛け金</label>
        <input type="text" id="bet" name="bet" />
        <br>
        <label for="payout">払戻金</label>
        <input type="text" id="payout" name="payout" />
        <br>
        <label for="memo">メモ</label>
        <input type="text" id="memo" name="memo" />
        <br>
        <button>登録する</button>
    </form>
</body>

</html>