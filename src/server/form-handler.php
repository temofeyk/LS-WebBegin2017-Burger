<?php
require "PHPMailer-master/PHPMailerAutoload.php";

$json = file_get_contents('php://input');
$obj = json_decode($json);
$body = '<h1>Ваш заказ сформирован</h1><ul>';

foreach($obj as $key=>$value) {
    $body .=  '<li>'.$key.': '.$value.'</li>';
}

$body .= '</ul>';

$mydata = $_POST;

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output
//login - fsdfsdfsdf.05
//password yjdbxrb#123
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'burger_mc@mail.ru';                 // SMTP username
$mail->Password = '4UA!:b6c3@PSTFgf';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
$mail->CharSet = 'UTF-8';
$mail->setFrom('burger_mc@mail.ru', 'mcBurger');
$mail->addAddress('temofey_k@mail.ru', 'Дорогому клиенту');     // Add a recipient

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Ваш заказ сформирован';
$mail->Body    = $body;
$mail->AltBody = 'Ваш заказ сформирован';

if(!$mail->send()) {
    $mydata['status'] = false;
    $mydata['statusText'] = 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    $mydata['status'] = true;
    $mydata['body'] = $body;
}

echo json_encode($mydata);