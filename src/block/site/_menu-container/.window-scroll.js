
/*
start .go-to-top window-scroll
*/


$(
	function() {
		
		if(screenJS.isXS() || screenJS.isSM()) {
			
			var pos = $(document).scrollTop();
			
			var ml = $('.menu-container .menu-list');
			
			
			if(ml.closest('.menu-container').hasClass('active')) {
				if(ml.data('margin-top') > pos) {
					ml.css({'margin-top' : pos + 'px'})
					ml.data('margin-top', pos);
				}
			} else {
				ml.css({'margin-top' : pos + 'px'})
				ml.data('margin-top', pos);
			}
			
		}
		
	}
);


/*
end .go-to-top window-scroll
*/
