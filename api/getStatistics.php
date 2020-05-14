<?php

  require_once('config/db.php');
  require_once('config/headers.php');

  $conn = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_BASE);
  mysqli_query($conn, "SET NAMES 'utf8'");
  $query = "SELECT
    MAX(question_createdAt) AS latest_update,
    (SELECT COUNT(question_id) AS question_count) AS question_count,
    (SELECT COUNT(question_id) FROM questions WHERE DATE(question_createdAt) = CURRENT_DATE()) AS added_today
    FROM questions
    ORDER BY question_createdAt DESC LIMIT 1
  ";
  $result = mysqli_query($conn, $query);

  $statsArray = array();

  while ($row = mysqli_fetch_assoc($result)) {
    array_push($statsArray, $row);
  }
  
  echo json_encode($statsArray);

?>