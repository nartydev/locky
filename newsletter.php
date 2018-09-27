<?php
  $mail = $_GET['mail'];
  $mail = htmlspecialchars($mail);
  
  $file = fopen('prout.txt', "a+");

  fwrite($file, $mail);
  fclose();


?>
