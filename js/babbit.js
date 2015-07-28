$(document).ready(function() {
	var $video = $('video'),
		$welcomeBtn = $('#welcome-btn');
	
	$video.mouseenter(function() {
		$(this).get(0).pause();
		$welcomeBtn.css({'display': 'block'})
	});

	$video.mouseleave(function() {
		$(this).get(0).play();
		$welcomeBtn.css({'display': 'none'})
	});


	// var $slick = $(".slick");

	// if ($(window).width() <= 768) {
	// 	$slick.slick({ 
	// 		infinite: true,
	// 		mobileFirst: true,
	// 	});
	// } else {
	// 	$slick.slick("unslick");
	// }

	// $(window).resize(function() {
	// 	if ($(window).width() <= 768) {
	// 		$slick.slick({ 
	// 			infinite: true,
	// 			mobileFirst: true,
	// 		});
	// 	} else {
	// 		$slick.slick("unslick");
	// 	}
	// });
})