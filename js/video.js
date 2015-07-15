$(document).ready(function() {
	var $video = $('video'), $welcome = $('#welcome');
	
	$video.mouseenter(function() {
		$(this).get(0).pause().fadeOut("slow");
	});

	$video.mouseleave(function() {
		$(this).get(0).play().fadeIn("slow");
	});

	// blackout video & bring welcome to front

})