<?php
include "dbconfig.php";

$value = $_POST["number"];

// if (empty($value)) {
//   echo "value is empty";
// } else {
//   echo $value;
// }

// Create connection
$conn = new mysqli($dbservername, $dbusername, $dbpassword, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO chartjs (charttype, chartdata, chartlabel, chartbackgroundcolor, chartbordercolor, chartlabels)
VALUES ('line', '$value', 'Additional', 'maroon', 'maroon', 'Chart_3')";

if ($conn->query($sql) === TRUE) {
   echo "New record created successfully". "<br>";









   $conn = new mysqli($dbservername, $dbusername, $dbpassword, $dbname);
   // Check connection
   if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
   }
   $sql = "SELECT * FROM chartjs";
   $result = $conn->query($sql);
   
   if ($result->num_rows > 0) {
    
     while($row = $result->fetch_assoc()) {
      //  echo "id: " . $row["chartid"]. " - ChartData: " . $row["chartdata"]."<br>";
          $data=array();
$data[] = $row["chartdata"];
// echo json_encode($data);
     }



   } else {
     echo "0 results";
   }
   $conn->close();





  //  echo array_sum($data);

$data_sum = array_sum($data);
$data_sum_json = json_encode($data_sum);






  ?> 
 
  <div class="alert alert-success" id="alert_success">Update Success</div>
  <?php
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();




?> 
