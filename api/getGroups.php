<?php

  require_once('config/db.php');
  require_once('config/headers.php');

  $conn = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_BASE);
  mysqli_query($conn, "SET NAMES 'utf8'");
  $query = "SELECT group_id, group_teacher FROM groups";
  $result = mysqli_query($conn, $query);

  $groupsArray = array();

  while ($row = mysqli_fetch_assoc($result)) {
    array_push($groupsArray, $row);
  }
  
  echo json_encode($groupsArray);

?>