
$(document.body).on('fecss.menu-list.item.contented.click', null, {}, function(event, a){
	
	var btn = a;
	var href = btn.attr('href');
	var target = btn.attr('data-target');
	
	if(btn.hasClass('url-history')) {
		if(target != '' && typeof target != 'undefined' && target != 'undefined') {
			var t_arr = target.split(',');
			href = t_arr[0];
			href = href.split(':');
			href = href[0];
		} else {
			href = $('.item-block.active').attr('id');
		}
	}
	
	
	var item = $(href + '.item-block');
	if(item.size()) {
		if(item.hasClass('active')) {
			
		} else {
			$('.item-block').removeClass('active');
			item.addClass('active');
		}
	} else {
		var ib = $('<div/>',{
			id : href,
			class : 'item-block ',
		})
		$('.item-block').removeClass('active');
		ib.addClass('active');
	}
	
	btn.closest('.menu-list').find('.item.active').removeClass('active');
	btn.closest('.item').addClass('active');
	
});

$(document.body).on('fecss.menu-list.item.dialoged.click', null, {}, function(event, a){
	
	var btn = a;
	
	btn.closest('.menu-list').find('.item.active').removeClass('active');
	btn.closest('.item').addClass('active');
	
});

$(document.body).on('click.fecss.menu-list.item.contented.a', '.menu-list .item.contented a', {}, function(event){
	event.preventDefault();
	
	$(document.body).trigger('fecss.menu-list.item.contented.click', [$(this)]);
	$(document.body).trigger('fecss.menu-container.hide');
});

$(document.body).on('click.fecss.menu-list.item.dialoged.a', '.menu-list .item.dialoged a', {}, function(event){
	event.preventDefault();
	
	$(document.body).trigger('fecss.menu-list.item.dialoged.click', [$(this)]);
	//$(document.body).trigger('fecss.menu-container.hide');
});
