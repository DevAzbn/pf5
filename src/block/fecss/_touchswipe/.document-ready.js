	// http://labs.rampinteractive.co.uk/touchSwipe/demos/
	
	$('.menu-container.touchswipe').swipe({
		
		swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
			$(document.body).trigger('fecss.menu-container.hide');
		},
		threshold:33
	});
	
	
	$('.content-container.touchswipe').swipe({
		
		swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
			$(document.body).trigger('fecss.menu-container.show');
		},
		threshold:33
	});
	