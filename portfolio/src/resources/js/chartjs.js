import Chart from "chart.js/auto";
const ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Black"],
        datasets: [{
            label: '掛け金',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor:'rgb(75, 192, 192, 0.5)',
        },{
            label: '払戻金',
            data: [20, 40, 80, 90, 50, 50, 40],
            fill: true,
            borderColor: 'rgb(0, 0, 192)',
            backgroundColor:'rgb(0, 0, 192, 0.5)',
        }]
    },
});