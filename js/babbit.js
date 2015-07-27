$(document).ready(function() {
	var $video = $('video');
	
	$video.mouseenter(function() {
		$(this).get(0).pause();
	});

	$video.mouseleave(function() {
		$(this).get(0).play();
	});


	var $slick = $(".slick");

	if ($(window).width() <= 768) {
		$slick.slick({ 
			infinite: true,
			mobileFirst: true,
		});
	} else {
		$slick.slick("unslick");
	}

	$(window).resize(function() {
		if ($(window).width() <= 768) {
			$slick.slick({ 
				infinite: true,
				mobileFirst: true,
			});
		} else {
			$slick.slick("unslick");
		}
	});
})