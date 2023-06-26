<?php
include "dbconfig.php";

$value = $_POST["number"];

if (empty($value)) {
  echo "value is empty";
} else {
  echo $value;
}
?> 
