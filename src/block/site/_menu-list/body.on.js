
$(document.body).on('fecss.menu-list.item.click', null, {}, function(event, a){
	
	var btn = a;
	var href = btn.attr('href');
	
	btn.closest('.menu-list').find('.item.active').removeClass('active');
	btn.closest('.item').addClass('active');
	
	var item = $(href + '.item-block');
	if(item.size()) {
		if(item.hasClass('active')) {
			
		} else {
			$('.item-block').removeClass('active');
			item.addClass('active')
		}
	}
	
});

$(document.body).on('click.fecss.menu-list.item.a', '.menu-list .item a', {}, function(event){
	event.preventDefault();
	
	$(document.body).trigger('fecss.menu-list.item.click', [$(this)]);
	$(document.body).trigger('fecss.menu-container.hide');
});
