<?php

  require_once('config/db.php');
  require_once('vendor/erusev/parsedown/Parsedown.php');

  $rawdata = file_get_contents("php://input");
  $decoded = json_decode($rawdata, true);

  $ustr = array('\u0104','\u0106','\u0118','\u0141','\u0143','\u00d3','\u015a','\u0179','\u017b','\u0105','\u0107','\u0119','\u0142','\u0144','\u00f3','\u015b','\u017a','\u017c');
  $plstr = array('Ą','Ć','Ę','Ł','Ń','Ó','Ś','Ź','Ż','ą','ć','ę','ł','ń','ó','ś','ź','ż');

  $clTitle = $decoded['titleIn'];
  $clBody = str_replace($ustr,$plstr,json_encode($decoded['bodyIn']));
  $clChapter = $decoded['chapterIn'];
  $clGroup = $decoded['groupIn'];

  $conn = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_BASE);
  mysqli_query($conn, "SET NAMES 'utf8'");
  $query = "INSERT INTO questions(question_title, question_body, question_chapter, question_group) VALUES('$clTitle', $clBody, $clChapter, $clGroup)";
  $result = mysqli_query($conn, $query);

  if ($result) echo json_encode(array("success" => true));
  else echo json_encode(array("success" => false));

?>