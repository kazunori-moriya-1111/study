import Chart from "chart.js/auto";
const ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx, {
    type: "line",
    data: {
        labels: title,
        datasets: [{
            label: '掛け金',
            data: total_bet,
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor:'rgb(75, 192, 192, 0.5)',
        },{
            label: '払戻金',
            data: total_payout,
            fill: true,
            borderColor: 'rgb(0, 0, 192)',
            backgroundColor:'rgb(0, 0, 192, 0.5)',
        }]
    },
});