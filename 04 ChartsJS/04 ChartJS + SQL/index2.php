<!-- //! Run PHP server: "php -S localhost:5500 -t ./" -->

<!-- //- Advance -->
<!-- //* Chart Database Connection PHP & MYSQL -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content="ChartJS Course" />
    <meta name="keywords" content="ChartJS" />
    <meta name="author" content="MichRad" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ChartJS Course</title>

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="favicon.svg" />

    <!-- Bootstrap5.2 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" defer></script>

    <!-- Font-Awesome5.9 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/js/all.min.js" defer></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css" />

    <!-- Chart.js 2.9.4 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.bundle.js"></script>

    <style>
      *,
      *::after,
      *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        font-family: sans-serif;
      }
      html {
        font-size: 100%;
      }
      body {
        box-sizing: border-box;
        background-color: whitesmoke !important;
      }
      canvas {
        max-width:600px;
        max-height:auto;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="m-5">
        <button class="btn btn-success" onclick="updateChart()">Update Chart</button>
        <canvas id="myChart"></canvas>
      </div>
    </div>

    <script>
      const data = [0, 20, 5, 2, 20, 30, 40, 20];
      const ctx = document.getElementById("myChart").getContext("2d");
     const chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August"],
          datasets: [
            {
              label: "My sales 1",
              backgroundColor: "rgba(255, 99, 132, 0.3)",
              borderColor: "red",      
              borderWidth: 3,
              data: data,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
                     }
                   }]
                 }
              }
      });


function updateChart() {
  chart.data.labels.push("Test")
  chart.data.datasets[0].data.push(Math.floor(Math.random() * 30 + 1));
  chart.update()
}

    </script>
  </body>
</html>
