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
    <p>総額掛け金:{{ $total_bet }}</p>
    <p>総額払い戻し金:{{ $total_payout }}</p>
    <p>回収率:{{ $recovery_rate }}%</p>
    <p>タグ一覧</p>
    @foreach($tags as $tag)
    <div class="grid">
        <button class="border-solid border border-indigo-600">{{ $tag->name }}</button>
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
                <p class="m-1">回収率:{{ round(($row->payout / $row->bet) * 100, 1) }}%</p>
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
    </div>
</body>

</html>