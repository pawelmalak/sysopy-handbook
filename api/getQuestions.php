<?php

  require_once('config/db.php');
  require_once('config/headers.php');
  require_once('vendor/erusev/parsedown/Parsedown.php');

  $conn = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_BASE);
  mysqli_query($conn, "SET NAMES 'utf8'");
  $query = "SELECT
    questions.question_id,
    questions.question_title,
    questions.question_body,
    questions.question_section,
    questions.question_group,
    questions.question_createdAt,
    groups.group_teacher,
    groups.group_id
    FROM questions
    INNER JOIN groups
    ON questions.question_group = groups.group_id
    ORDER BY question_section ASC";
  $result = mysqli_query($conn, $query);

  $questionsArray = array();

  while ($row = mysqli_fetch_assoc($result)) {
    $Parsedown = new Parsedown();
    $row["parsedBody"] = $Parsedown->text(json_decode($row['question_body']));
    array_push($questionsArray, $row);
  }

  echo json_encode($questionsArray);

?>