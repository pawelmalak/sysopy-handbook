<?php

  // require_once('config/db.php');
  require_once('vendor/erusev/parsedown/Parsedown.php');
  $rawdata = file_get_contents("php://input");
  // Let's say we got JSON
  $decoded = json_decode($rawdata);

  $Parsedown = new Parsedown();

  // echo htmlspecialchars($decoded);
  // echo $decoded;
  echo $Parsedown->text($decoded);

  /*$xd = json_decode($_POST('blob'));
  $arr = array(
    "ad" => 1
  );*/
  // echo json_encode($arr);
/*
  $conn = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_BASE);
  $query = "INSERT INTO questions(question_body) VALUES()";
  $result = mysqli_query($conn, $query);

  $questionsArray = array();

  while ($row = mysqli_fetch_assoc($result)) {
    array_push($questionsArray, $row);
  }*/



?>