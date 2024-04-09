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
    <!-- ソートボタン一覧 -->
    <div class="flex justify-end">
        <a href="{{ route('manegement.sort.date') }}" @class(['bg-blue-500'=> !$sort_isActive['date'], 'bg-red-500' => $sort_isActive['date'],
            'hover:bg-blue-700' => !$sort_isActive['date'], 'hover:bg-red-700' => $sort_isActive['date'] , 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded'])>日付順</a>
        <a href="{{ route('manegement.sort.recovery_rate') }}" @class(['bg-blue-500'=> !$sort_isActive['recovery_rate'], 'bg-red-500' => $sort_isActive['recovery_rate'],
            'hover:bg-blue-700' => !$sort_isActive['recovery_rate'], 'hover:bg-red-700' => $sort_isActive['recovery_rate'] , 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded'])>回収率順</a>
        <a href="{{ route('manegement.sort.bet') }}" @class(['bg-blue-500'=> !$sort_isActive['bet'], 'bg-red-500' => $sort_isActive['bet'],
            'hover:bg-blue-700' => !$sort_isActive['bet'], 'hover:bg-red-700' => $sort_isActive['bet'] , 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded'])>掛け金順</a>
        <a href="{{ route('manegement.sort.payout') }}" @class(['bg-blue-500'=> !$sort_isActive['payout'], 'bg-red-500' => $sort_isActive['payout'],
            'hover:bg-blue-700' => !$sort_isActive['payout'], 'hover:bg-red-700' => $sort_isActive['payout'] , 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded'])>払戻金順</a>
    </div>
    <!-- フィルタータグ一覧 -->
    <p>タグ一覧</p>
    <div class='flex overflow-x-auto m-1'>
        <a href="{{ url()->current() }}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-none">タグフィルターを解除</a>
        <!-- 複数タグ選択用モーダル -->
        <div class="flex-none bg-blue-500 hover:bg-blue-700 rounded">
            <livewire:select-tag-modal :tags="$tags" />
        </div>
        @foreach($tags as $tag)
        <a href="{{ url()->current(). '?' . http_build_query(['tagid' => $tag->id ]) }}" @class(['border-indigo-600'=> !$tag->isActive, 'border-red-600' => $tag->isActive,
            'border-solid border', 'flex-none', 'mb-5', 'mx-1', 'px-1', 'rounded' ])>
            {{ $tag->name }}</a>
        @endforeach
    </div>
    <!-- 成績表 -->
    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        総掛け金
                    </th>
                    <th scope="col" class="px-6 py-3">
                        総払い戻し金
                    </th>
                    <th scope="col" class="px-6 py-3">
                        回収率
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ $total_bet }}
                    </th>
                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ $total_payout }}
                    </td>
                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ $recovery_rate }}%
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

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
    currentURL = <?php echo json_encode(url()->current()) ?>;

    function getCheckboxValues() {
        const form = document.getElementById('checkboxForm');
        const checkboxs = form.querySelectorAll('input[name="selectedTags"]:checked');
        const values = Array.from(checkboxs).map(checkbox => checkbox.value)
        const queryParams = new URLSearchParams({
            tagid: values
        }).toString();
        window.location.href = currentURL + '?' + queryParams
    }
</script>

</html>