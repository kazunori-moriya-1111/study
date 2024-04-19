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
    <article class="container mx-auto">
        <section class="flex items-center justify-center my-1">
            <a href="{{ route('manegement.totalling.date') }}" @class(['bg-blue-500'=> !$selected_period['day'], 'bg-red-500' => $selected_period['day'], 'hover:bg-blue-700' => !$selected_period['day'], 'hover:bg-red-700' => $selected_period['day'], 'text-white', 'font-bold', 'py-2', 'px-4', 'mx-4', 'rounded' ])>日次</a>
            <a href="{{ route('manegement.totalling.week') }}" @class(['bg-blue-500'=> !$selected_period['week'], 'bg-red-500'=> $selected_period['week'], 'hover:bg-blue-700' => !$selected_period['week'], 'hover:bg-red-700'=> $selected_period['week'], 'text-white', 'font-bold' , 'py-2', 'px-4', 'mx-4', 'rounded' ])>週次</a>
            <a href="{{ route('manegement.totalling.year') }}" @class(['bg-blue-500'=> !$selected_period['year'], 'bg-red-500'=> $selected_period['year'], 'hover:bg-blue-700' => !$selected_period['year'], 'hover:bg-red-700'=> $selected_period['year'], 'text-white', 'font-bold' , 'py-2', 'px-4', 'mx-4', 'rounded' ])>年次</a>
        </section>
        <section class="flex items-center justify-center my-1">
            <canvas class="" id="myChart"></canvas>
        </section>
    </article>
    <script>
        title = <?php echo json_encode($title) ?>;
        total_bet = <?php echo json_encode($total_bet) ?>;
        total_payout = <?php echo json_encode($total_payout) ?>;
    </script>
</body>

</html>