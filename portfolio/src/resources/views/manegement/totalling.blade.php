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
        <select name='type'>
            <option value="day" {{ $type == 'day' ? "selected='selected'" : ''}}>日次</option>
            <option value="week" {{ $type == 'week' ? "selected='selected'" : ''}}>週次</option>
            <option value="year" {{ $type == 'year' ? "selected='selected'" : ''}}>年次</option>
        </select>
        <button type="submit">再表示</button>
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