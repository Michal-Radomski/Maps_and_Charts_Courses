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
        max-width: 600px;
        max-height: auto;
      }
      .hidden {
        display: none;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="m-5">
        <!-- <button class="btn btn-success" onclick="updateChart()2">Update Chart</button> -->
        <div class="card-body">
          <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#chartData">
            Add Data Modal
          </button>
        </div>
        <div class="card-body">
          <div id="updateSuccess">empty...</div>
          <div class="alert alert-info hidden" id="alert_info">Update Info</div>
          <canvas id="myChart"></canvas>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="chartData" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add Data</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="numberInput" class="form-label">Add Data</label>
                <input type="number" class="form-control" id="numberInput" placeholder="0" />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-danger" onclick="updateChart()" data-bs-dismiss="modal">
                Update Chart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script>
      const data1 = [0, 20, 5, 2, 20, 30, 40, 20];
      const data2 = [10, 10, 15, 24, 10, 10, 20, 10];
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
              data: data1,
            },
            {
              label: "My sales 2",
              backgroundColor: "rgba(12, 99, 255, 0.3)",
              borderColor: "blue",
              borderWidth: 3,
              data: data2,
            },
            {
              label: "My sales 3",
              backgroundColor: "maroon",
              borderColor: "maroon",
              borderWidth: 3,
              data: <?= json_encode(explode(",", $data_sum_json));?>, //* ??????????????????
            },
          ],
        },

        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });

      // function updateChart2() {
      //   chart.data.labels.push("Additional label");
      //   chart.data.datasets[0].data.push(Math.floor(Math.random() * 30 + 1));
      //   chart.data.datasets[1].data.push(Math.floor(Math.random() * 30 + 1));
      //   chart.update();
      // }

      function updateChart() {
        const xhttp = new XMLHttpRequest();
        // console.log({ xhttp });
        xhttp.onreadystatechange = function () {
          if (this.readyState === 4 && this.status === 200) {
            document.getElementById("updateSuccess").innerHTML = this.responseText;
            // console.log("this.responseText:", this.responseText);
            const alert_info = document.getElementById("alert_info");
            // console.log({alert_info});
            alert_info.classList.remove("hidden");
          }
        };

        let send_value = "number=" + document.getElementById("numberInput").value;
        console.log({ send_value });

        xhttp.open("POST", "chart-modal-inc.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(send_value);
        setTimeout(() => {
          chart.update();
        }, 500);
      }
    </script>
  </body>
</html>
