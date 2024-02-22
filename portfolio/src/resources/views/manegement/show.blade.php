<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>Laravel</title>
</head>

<body>
    <div>ボートレース収支管理アプリ_show</div>
    <a href="{{ route('manegement.index') }}" class="text-blue-500 underline">TOPへ</a><br>
    <p>{{ $record->date }} {{ $record->bet }} {{ $record->payout }} {{ $record->memo }}</p>
</body>

</html>