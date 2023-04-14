const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue'],
        datasets: [{
            label: '',
            data: [67, 49],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [
                {
                    gridLines: {
                        lineWidth: 0
                    }
                }
            ]
        }
    }
});