<?php

  require_once('config/db.php');
  require_once('config/headers.php');
  require_once('vendor/erusev/parsedown/Parsedown.php');

  $conn = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_BASE);
  mysqli_query($conn, "SET NAMES 'utf8'");
  $query = "SELECT * FROM questions ORDER BY question_section ASC";
  $result = mysqli_query($conn, $query);

  $questionsArray = array();

  while ($row = mysqli_fetch_assoc($result)) {
    $Parsedown = new Parsedown();
    $row["blob"] = $Parsedown->text(json_decode($row['question_body']));
    array_push($questionsArray, $row);
  }

  header("Content-Type: application/json");
  echo json_encode($questionsArray);

?>