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
        <main class="h-96 flex-1 bg-blue-50 p-4">
            <div class="mx-auto max-w-md">
                <div class="flex h-40 max-w-md items-center justify-between bg-blue-50">
                    <div class="h-20 w-20 rounded bg-blue-500"></div>
                    <div class="h-20 w-20 rounded bg-blue-500"></div>
                    <div class="h-20 w-20 rounded bg-blue-500"></div>
                </div>
            </div>
        </main>
        <footer class="bg-blue-200 p-4">Footer</footer>
    </div>
</body>

</html>