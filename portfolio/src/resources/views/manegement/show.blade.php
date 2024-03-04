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
    <div>ボートレース収支管理アプリ_show</div>
    <a href="{{ route('manegement.index') }}" class="text-blue-500 underline">TOPへ</a><br>
    <label for="date">日付</label>
    <div>{{ $record->date }}</div>
    <br>
    <label for="bet">掛け金</label>
    <div>{{ $record->bet }}</div>
    <br>
    <label for="payout">払戻金</label>
    <div>{{ $record->payout }}</div>
    <br>
    <label for="tag">tag</label>
    <!-- タグデータ所持判定 -->
    @if(!($record->tags->isEmpty()))
    @foreach($record->tags as $tag)
    <p>{{ $tag->name }}</p>
    @endforeach
    @endif
    <br>
    @if($record->memo)
    <label for="memo">メモ</label>
    <div>{{ $record->memo }}</div>
    <br>
    @endif
    <form method="get" action="{{ route('manegement.edit', ['id' => $record->id ]) }}">
        <button class="text-blue-500 underline">編集する</button>
    </form>
    <livewire:destory-record-modal :record="$record" />
    @livewireScripts
</body>

</html>