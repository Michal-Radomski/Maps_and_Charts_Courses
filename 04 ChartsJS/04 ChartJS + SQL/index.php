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
        <canvas id="myChart"></canvas>
      </div>
    </div>

<?php
include 'dbconfig.php';
// Create connection
// echo $dbservername;
// echo $dbusername;
// echo $dbpassword;
// echo $dbname;

$conn = new mysqli($dbservername, $dbusername, $dbpassword, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// echo "Connected successfully <br/>";
$sql = "SELECT * FROM chartjs";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {   
    // echo $row["chartdata"];
    $charttype=$row["charttype"];
    $chartdata=$row["chartdata"];
    $chartlabel=$row["chartlabel"];
    $chartbackgroundcolor=$row["chartbackgroundcolor"];
    $chartbordercolor=$row["chartbordercolor"];
    }
} else {
    echo "0 results";
}
$conn->close();
// echo json_encode(explode(",", $chartdata));
?> 

<!-- //* Test only -->
<!-- <?php
$jan = 0;
$feb= 20;
$mar= 5;
$apr= 5;
$may= 20;
$jun= 30;
$jul= 40;
$aug= 20;
$lineChartValue = array($jan, $feb,$mar,$apr, $may, $jun, $jul, $aug, 49);
// echo $lineChartValue[0];
$jsonReady = json_encode($lineChartValue);
// echo $jsonReady;
?> -->

    <script>
      // const data = [0, 20, 5, 2, 20, 30, 40, 20];
      // const data = <?php echo $jsonReady;?>;
      // const data = <?= $jsonReady;?>;
      const data = <?= json_encode(explode(",", $chartdata));?>
  
      const ctx = document.getElementById("myChart").getContext("2d");
      new Chart(ctx, {
        // type: "line",
        type: "<?= $charttype;?>",
        data: {
          // labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Additional"],
          labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August",],
          datasets: [
            {
              // label: "My sales 1",
              label: "<?= $chartlabel;?>",
              // backgroundColor: "rgba(255, 99, 132, 0.3)",
              backgroundColor: "<?= $chartbackgroundcolor;?>",
              // borderColor: "red",
              borderColor: "<?= $chartbordercolor;?>",
              borderWidth: 3,
              data: data,
            },
          ],
        },
        options: {},
      });
    </script>
  </body>
</html>
