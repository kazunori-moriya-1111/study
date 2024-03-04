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
    <div>ボートレース収支管理アプリ_edit</div>
    <a href="{{ route('manegement.index') }}" class="text-blue-500 underline">TOPへ</a><br>
    <x-input-error :messages="$errors->get('date')" class="mt-2" />
    <x-input-error :messages="$errors->get('bet')" class="mt-2" />
    <x-input-error :messages="$errors->get('payout')" class="mt-2" />
    <x-input-error :messages="$errors->get('memo')" class="mt-2" />
    <form method="post" action="{{ route('manegement.update', ['id' => $record->id]) }}">
        @csrf
        <label for="date">日付</label>
        <input type="date" id="date" name="date" value="{{ $record->date }}" />
        <br>
        <label for="bet">掛け金</label>
        <input type="text" id="bet" name="bet" value="{{ $record->bet }}" />
        <br>
        <label for="payout">払戻金</label>
        <input type="text" id="payout" name="payout" value="{{ $record->payout }}" />
        <br>
        <label>tag</label>
        <livewire:record-tag-edit-modal :record="$record" :tags="$tags" :recordTagIdCollection="$recordTagIdCollection" />
        <!-- タグデータ所持判定 -->
        @if(!($record->tags->isEmpty()))
        <!-- タグデータ一覧表示 -->
        @foreach($record->tags as $tag)
        <p>{{ $tag->name }}</p>
        @endforeach
        @endif
        <br>
        <label for="memo">メモ</label>
        <input type="text" id="memo" name="memo" value="{{ $record->memo }}" />
        <br>
        <button class="text-blue-500 underline">更新する</button>
    </form>
    @livewireScripts
</body>

</html>