<?php

  require_once('config/db.php');

  $conn = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_BASE);
  $query = "SELECT * FROM questions ORDER BY question_section ASC";
  $result = mysqli_query($conn, $query);

  $questionsArray = array();

  while ($row = mysqli_fetch_assoc($result)) {
    array_push($questionsArray, $row);
  }

  header("Content-Type: application/json");
  echo json_encode($questionsArray);

?>