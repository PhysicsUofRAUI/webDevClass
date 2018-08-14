<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

session_start();

$to = 'kodyrogers21@gmail.com';

if (isset($_POST['mail']) && isset($_POST['name']) && isset($_POST['message'])) {
  $mail = new PHPMailer;

  $mail->isSMTP();                                      // Set mailer to use SMTP
  $mail->Host = 'smtp.gmail.com;';  // Specify main and backup SMTP servers
  $mail->SMTPAuth = true;                               // Enable SMTP authentication
  $mail->Username = 'kodyrogers21@gmail.com';                 // SMTP username
  $mail->Password = '*********';
  $mail->Port = 587;
  $mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted
  $mail->From = $_POST['mail'];
  $mail->FromName = $_POST['name'];
  $mail->addAddress('kodyrogers21@gmail.com');     // Add a recipient

  $mail->WordWrap = 50;                                 // Set word wrap to 50 characters
  $mail->isHTML(true);                                  // Set email format to HTML

  $mail->Subject = 'Website suggestion';
  $mail->Body    = $_POST['message'];
  $mail->AltBody = $_POST['message'];

  if(!$mail->send()) {
      $_SESSION['error'] = 'Message could not be sent.';
      $_SESSION['error_info'] = 'Mailer Error: ' . $mail->ErrorInfo;
  } else {
      $_SESSION['success'] = 'Message has been sent';
  }
}
 ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="css/default.css">
  <link rel="stylesheet" href="css/mainStyle.css">
  <title>Suggestions</title>
</head>
<body>

  <!--
  This css was obtained from a w3 schools example and then
  edited and expanded for my own purposes
  The example is located at this url
   https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_dropdown_navbar
  -->
  <div class="navbar">
    <a href="index.html">Home</a>
    <div class="dropdown">
      <button class="dropbtn">Queens
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="QueensInfo.html">Learn More!</a>
        <a href="queensCalc.html">Custom Calculator!</a>
        <a href="QueensGame.html">Play!</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">Tic-Tac-Toe
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="Tic-Tac-ToeInfo.html">Learn More!</a>
        <a href="Tic-Tac-ToePlay.html">Play!</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">Rock Paper Scissors
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="RockPaperScissorsInfo.html">Learn More!</a>
        <a href="RockPaperScissorsGame.html">Play!</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">Other Gaming Sites
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="https://www.miniclip.com/games/en/">Miniclip</a>
        <a href="http://www.coffeebreakarcade.com/">Coffee Break Arcade</a>
      </div>
    </div>
    <a href="suggestion.php">Suggestions</a>
  </div>
  <!--
  End of obtained code
  -->
  <?php
  if ( isset($_SESSION['error']) ) {
      echo('<p style="color: red;">'.htmlentities($_SESSION['error'])."</p>\n");
      unset($_SESSION['error']);
  }
  if ( isset($_SESSION['error_info']) ){
    echo('<p style="color: red;">'.htmlentities($_SESSION['error_info'])."</p>\n");
    unset($_SESSION['error']);
  }
  if ( isset($_SESSION['success']) ) {
      echo('<p style="color: green;">'.htmlentities($_SESSION['success'])."</p>\n");
      unset($_SESSION['success']);
  }
  ?>
  <p>
    Use the form below to send suggestions to the developer. Some things that could
    be suggested is new games and technical fixes. Thank you for any and all input.
  </p>

  <form method="POST" >
    Email Address: <input type="text" name="mail" size="50" />
    <br>

    Name: <input type="text" name="name" size="64" />
    <br>

    Message: <br>
    <textarea type="text" name="message" rows="10" cols="51" ></textarea>
    <br>

    <input type="submit" value="Send" />
    <input type="reset" value="Reset" />
  </form>


  <p>Last edited March 24, 2018 by Kody Rogers</p>

</body>
</html>
