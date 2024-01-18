<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite('resources/css/app.css')
    <title>Laravel</title>
</head>

<body>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">森谷和徳のポートフォリオ</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">このサイトではでは私の職務経歴やWEBアプリを公開しています</p>
            </div>
            <div class="flex flex-wrap">
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">職務経歴</h2>
                    <p class="leading-relaxed text-base mb-4">インフラエンジニア・WEBエンジニアを経て現在はデータサイエンティストとして勤務しています</p>
                    <a href="{{ url('/contents/jobcareer') }}" class="text-indigo-500 inline-flex items-center">詳細を確認する
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">履歴書</h2>
                    <p class="leading-relaxed text-base mb-4">ああああああ</p>
                    <a href="{{ url('/contents/resume') }}" class=" text-indigo-500 inline-flex items-center">詳細を確認する
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">ボートレースとの出会い</h2>
                    <p class="leading-relaxed text-base mb-4">私がボートレースにのめり込んだきっかけを記載してます</p>
                    <a href="{{ url('/contents/boatrace') }}" class="text-indigo-500 inline-flex items-center">詳細を確認する
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">ボートレース収支管理アプリ</h2>
                    <p class="leading-relaxed text-base mb-4">Laravelの機能を用いてボートレースの収支管理WEBアプリを開発しました。技術力の確認にご活用ください。</p>
                    <a class="text-indigo-500 inline-flex items-center">詳細を確認する
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        </div>
    </section>
</body>

</html>