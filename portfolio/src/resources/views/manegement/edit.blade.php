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
    <x-nav-bar />
    <article class="container mx-auto">
        <x-input-error :messages="$errors->get('date')" class="mt-2" />
        <x-input-error :messages="$errors->get('bet')" class="mt-2" />
        <x-input-error :messages="$errors->get('payout')" class="mt-2" />
        <x-input-error :messages="$errors->get('memo')" class="mt-2" />
        <form method="post" action="{{ route('manegement.update', ['id' => $record->id]) }}">
            @csrf
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="date">日付</label>
                    <input class="datepicker appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="date" type="date" name="date" value="{{ $record->date }}" />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="bet">掛け金</label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="bet" type="text" name="bet" value="{{ $record->bet }}">
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="payout">払戻金</label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="payout" type="text" name="payout" value="{{ $record->payout }}">
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">tag</label>
                    <livewire:record-tag-edit-modal :record="$record" :tags="$tags" :recordTagIdCollection="$recordTagIdCollection" />
                    <!-- タグデータ所持判定 -->
                    @if(!($record->tags->isEmpty()))
                    <!-- タグデータ一覧表示 -->
                    @foreach($record->tags as $tag)
                    <p>{{ $tag->name }}</p>
                    @endforeach
                    @endif
                </div>
                <div class=" w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="memo">メモ</label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="memo" type="text" name="memo" value="{{ $record->memo }}" />
                </div>
            </div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">更新する</button>
        </form>
        @livewireScripts
    </article>
</body>

</html>