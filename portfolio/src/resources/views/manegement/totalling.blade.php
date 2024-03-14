<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite(['resources/css/app.css','resources/js/app.js', 'resources/js/chartjs.js'])
    <title>Laravel</title>
</head>

<body>
    <x-nav-bar />
    <form method="post" action="{{ route('manegement.totalling') }}">
        @csrf
        <p>集計単位</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" name="type" value="day">日次</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" name="type" value="week">週次</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" name="type" value="year">年次</button>
    </form>
    <div class="mx-atuo w-1/2">
        <canvas class="" id="myChart"></canvas>
    </div>
    <script>
        title = <?php echo json_encode($title) ?>;
        total_bet = <?php echo json_encode($total_bet) ?>;
        total_payout = <?php echo json_encode($total_payout) ?>;
    </script>
</body>

</html>