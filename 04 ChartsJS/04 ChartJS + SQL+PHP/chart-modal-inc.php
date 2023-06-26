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

$sql = "INSERT INTO chartjs (chartid, charttype, chartdata, chartlabel, chartbackgroundcolor, chartbordercolor, chartlabels)
VALUES (4,'line', $value, 'Additional', 'maroon', 'maroon', 'Chart_3')";

if ($conn->query($sql) === TRUE) {
   echo "New record created successfully";
  ?> 
 
  <div class="alert alert-success" id="alert_success">Update Success</div>
  <?php
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();




?> 
