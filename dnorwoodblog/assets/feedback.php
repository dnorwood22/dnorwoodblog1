<?php
// Settings
$emailTo = 'mail@mail.com';
$emailFrom = sprintf('hello@%s', $_SERVER['SERVER_NAME']);
$subject = sprintf('Message from %s', $_SERVER['SERVER_NAME']);


$hasError = false;
$guestName = '';
$guestEmail = '';
$guestMessage = '';
$response = [
    'success' => false,
    'message' => '',
];

// e-mail check
if (empty($_POST['email'])) {
    $hasError = true;
} else {
    $guestEmail = trim($_POST['email']);
}

// Check for message
if (empty($_POST['message'])) {
    $hasError = true;
} else {
    $guestMessage = trim($_POST['message']);
}

// Check for name
if (empty($_POST['name'])) {
    $hasError = true;
} else {
    $guestName = trim($_POST['name']);
}

//If there is no error, send the email
if (!$hasError) {
    $body = "Name: $guestName \r\nEmail: $guestEmail \n\nSubject: $subject \n\nComments:\n $guestMessage";
    $headers = "From: ".$emailFrom.">\r\nReply-To: ".$guestEmail."";

    $response['success'] = @mail($emailTo, $subject, $body, $headers);
    if (!$response['success']) {
        $response['message'] = 'Can\'t send e-mail!';
    }
} else {
    $response['message'] = 'Check your data';
}
echo json_encode($response);
