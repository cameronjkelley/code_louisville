$(document).ready(function() {
	var $video = $('video'), $welcome = $('#welcome');
	
	$video.hover(function() {
		$(this).get(0).pause()
	});

	$video.mouseleave(function() {
		$(this).get(0).play();
	});

	// blackout video & bring welcome to front

})