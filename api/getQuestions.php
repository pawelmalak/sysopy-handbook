<?php

  require_once('config/db.php');
  require_once('config/headers.php');

  $conn = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_BASE);
  mysqli_query($conn, "SET NAMES 'utf8'");
  $query = "SELECT
    questions.question_id,
    questions.question_title,
    questions.question_body,
    questions.question_chapter,
    questions.question_group,
    questions.question_createdAt,
    groups.group_teacher,
    groups.group_id
    FROM questions
    INNER JOIN groups
    ON questions.question_group = groups.group_id
    ORDER BY question_chapter ASC
  ";
  $result = mysqli_query($conn, $query);

  $questionsArray = array();

  while ($row = mysqli_fetch_assoc($result)) {
    array_push($questionsArray, $row);
  }

  echo json_encode($questionsArray);

?>