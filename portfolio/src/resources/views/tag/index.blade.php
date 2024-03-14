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
    <!-- タグ作成モーダル -->
    <livewire:create-tag-modal />
    <!-- データ一覧表示 -->
    @foreach($data as $row)
    <p>{{ $row->name }}</p>
    <!-- タグ編集モーダル -->
    <livewire:update-tag-modal :tag_id="$row->id" :name="$row->name" />
    <!-- タグ削除モーダル -->
    <livewire:destroy-tag-modal :tag_id="$row->id" :name="$row->name" />
    @endforeach
    @livewireScripts
</body>

</html>