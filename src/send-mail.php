<?php

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Set the email recipient
$recipient = 'matthies@kallsen.net';

// Create the email body
$body = $name." schreibt via kallsen.net: \n\n".$message;

$headers = "From: ".$email;
// Send the email
mail($recipient, $subject, $body, $headers);

// Respond to the React app
header('Content-Type: application/json');
echo json_encode([
  'message' => 'Your message was sent successfully!',
]);