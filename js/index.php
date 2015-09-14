<?php
require __DIR__ . '/vendor/'

$app->post('/contact', function() use($app) {
	$name = $app->request->post('name');
	$email = $app->request->post('email');
	$msg = $app->request->post('msg');

	if (!empty($name) && !empty($email) && !empty($msg)) {
		$cleanName = filter_var($name, FILTER_SANITIZE_STRING);
		$cleanEmail = filter_var($email, FILTER_SANITIZE_EMAIL);
		$cleanMsg = filter_var($msg, FILTER_SANITIZE_STRING);
	} else {
		// message the user that there was a problem
		$app-redirect('/contact');
	}

	$transport = Swift_MailTransport::newInstance();
	$mailer = Swift_Mailer::newInstance($transport);

	$message = Swift_Message::newInstance();
	$message->setSubject('Email From Our Website');
	$message->setFrom(array(
		$cleanEmail => $cleanName
	));
	$message->setTo(array('cameronjkelley@gmail.com' => 'Cameron Kelley'));
	$message->setBody($cleanMsg);

	$result = $mailer->send($message);

	if ($result > 0) {
		// send a thank you message
		$app->redirect('/');
	} else {
		// send a message to user that the message failed
		// log error
		$app->redirect('/contact');
	}
});

$app->run();
?>