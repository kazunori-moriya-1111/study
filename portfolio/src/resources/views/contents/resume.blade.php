<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite('resources/css/app.css')
    <title>Laravel</title>
</head>

<body>
    <div class="flex h-60 min-h-screen flex-col">
        <header class="bg-blue-200 p-4">Header</header>
        <div class="flex">
            <aside class="w-32 flex-none bg-blue-200 p-4">森谷和徳</aside>
            <main class="min-w-0 flex-1 overflow-auto bg-blue-50 p-4">
                <div class="flex h-60">
                    <aside class="w-32 flex-none bg-blue-200 p-4">日付</aside>
                    <main class="min-w-0 flex-1 overflow-auto bg-blue-50 p-4">経歴</main>
                </div>
                <div class="flex h-60">
                    <aside class="w-32 flex-none bg-blue-200 p-4">日付</aside>
                    <main class="min-w-0 flex-1 overflow-auto bg-blue-50 p-4">経歴</main>
                </div>
                <div class="flex h-60">
                    <aside class="w-32 flex-none bg-blue-200 p-4">日付</aside>
                    <main class="min-w-0 flex-1 overflow-auto bg-blue-50 p-4">経歴</main>
                </div>
            </main>
        </div>
        <footer class="bg-blue-200 p-4">Footer</footer>
    </div>
</body>

</html>