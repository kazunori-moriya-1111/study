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
        <div class="container px-5 py-24 mx-auto flex flex-col">
            <div class="lg:w-4/6 mx-auto">
                <div class="flex flex-col sm:flex-row mt-10">
                    <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        <img src=" {{ asset('img/profile.png') }}" class="w-30 h-30" />
                        <div class=" flex flex-col items-center text-center justify-center">
                            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">森谷和徳</h2>
                            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                            <p class="text-base">moriya kazunori</p>
                        </div>
                    </div>
                    <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p class="leading-relaxed text-lg mb-4">このサイトでは〜〜</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
        </div>
    </section>
</body>

</html>