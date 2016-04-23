
$(function(){
	
	//var b_h = $('.content-container .item-block.active').outerHeight(true);//$(document).outerHeight(true);
	//$('.menu-container').height(b_h + 'px');
	//$('.content-container').height(b_h + 'px');
	
});

$(function(){
	
	if(screenJS.isMD() || screenJS.isLG()) {
		
		$('.menu-container .menu-list')
			.css({'margin-top' : '0px'})
			.data('margin-top', 0);
		
	}
	
});



