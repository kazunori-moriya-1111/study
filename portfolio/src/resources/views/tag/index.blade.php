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
    <article class="container mx-auto flex-col">
        <h1>タグ一覧</h1>
        <hr>
        <section class="grid grid-cols-4 gap-1">
            <!-- タグ一覧表示 -->
            <section class="col-span-3 overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                タグ名
                            </th>
                            <th scope="col" class="px-6 py-3">
                                編集
                            </th>
                            <th scope="col" class="px-6 py-3">
                                削除
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($data as $row)
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900  dark:text-white">
                                <p>{{ $row->name }}</p>
                            </th>
                            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <!-- タグ作成モーダル -->
                                <livewire:update-tag-modal :tag_id="$row->id" :name="$row->name" />
                            </td>
                            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <!-- タグ削除モーダル -->
                                <livewire:destroy-tag-modal :tag_id="$row->id" :name="$row->name" />
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </section>
            <!-- タグ作成モーダル -->
            <section class="col-span-1">
                <livewire:create-tag-modal />
            </section>
        </section>
    </article>
    @livewireScripts
</body>

</html>