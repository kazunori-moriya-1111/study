<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite(['resources/css/app.css','resources/css/calender.css' , 'resources/js/app.js', 'resources/js/calendar.js'])
    <title>Laravel</title>
    @livewireStyles
</head>

<body>
    <x-nav-bar />
    <input id="result" type="button" onclick="renderFunc()">
    <article class="container mx-auto">
        <section class="my-1">
            <livewire:calendar-result />
        </section>
        <div id="calendar" class="my-1"></div>
    </article>
    @livewireScripts
</body>
<script>
    var renderFunc = function() {
        newData = sessionStorage.getItem("currentStart");
        livewire.emit('refreshComponentWithData', newData);
    }
    json_array = <?php echo $json_array ?>;
</script>

</html>