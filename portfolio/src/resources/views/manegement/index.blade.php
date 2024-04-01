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
    <a href="{{ route('manegement.index', ['sort' => 'date']) }}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">日付順</a>
    <a href="{{ route('manegement.index', ['sort' => 'recovery_rate']) }}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">回収率順</a>
    <a href="{{ route('manegement.index', ['sort' => 'bet']) }}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">掛け金順</a>
    <a href="{{ route('manegement.index', ['sort' => 'payout']) }}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">払戻金順</a>
    <p>総額掛け金:{{ $total_bet }}</p>
    <p>総額払い戻し金:{{ $total_payout }}</p>
    <p>回収率:{{ $recovery_rate }}%</p>
    <p>タグ一覧</p>
    <a href="{{ route('manegement.index') }}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">全て</a>
    <!-- 複数タグ選択用モーダル -->
    <livewire:select-tag-modal :tags="$tags" />
    <!-- TODO 選択されてるタグの色を変更する機能 -->
    @foreach($tags as $tag)
    <div class="grid">
        <a href="{{ route('manegement.index', ['tagid' => $tag->id ]) }}" class="border-solid border border-indigo-600">{{ $tag->name }}</a>
    </div>
    @endforeach
    <!-- データ一覧表示 -->
    <!-- 横にn列 タグが多い時は縦に伸ばす感じ -->
    <div class="container mx-auto">
        <div class="grid grid-cols-3 gap-4">
            @foreach($data as $row)
            <div class="m-1 border-solid border border-indigo-600 rounded-md">
                <p class="m-1">{{ $row->date }}</p>
                <p class="m-1">掛け金:{{ $row->bet }} 払い戻し金:{{ $row->payout }}</p>
                <p class="m-1">回収率:{{ $row->recovery_rate }}%</p>
                <!-- タグデータ所持判定 -->
                @if(!($row->tags->isEmpty()))
                <!-- タグデータ一覧表示 -->
                @foreach($row->tags as $tag)
                <div>
                    <div class="m-1 bg-slate-100">{{ $tag->name }}</div>
                </div>
                @endforeach
                @endif
                <a class="text-blue-500 underline" href="{{ route('manegement.show', ['id' => $row->id ]) }}">詳細確認</a>
            </div>
            @endforeach
        </div>
        {{ $data->links() }}
    </div>
    @livewireScripts
</body>
<script>
    function getCheckboxValues() {
        const form = document.getElementById('checkboxForm');
        const checkboxs = form.querySelectorAll('input[name="selectedTags"]:checked');
        const values = Array.from(checkboxs).map(checkbox => checkbox.value)
        const queryParams = new URLSearchParams({
            tagid: values
        }).toString();
        console.log(queryParams);
        window.location.href = "http://localhost/manegement?" + queryParams
    }
</script>

</html>