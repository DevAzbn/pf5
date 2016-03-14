
$(document.body).on('fecss.menu-container.show', null, {}, function(event){
	$('.window-width-xs .menu-container, .window-width-sm .menu-container').addClass('active');
});

$(document.body).on('fecss.menu-container.hide', null, {}, function(event){
	$('.window-width-xs .menu-container, .window-width-sm .menu-container').removeClass('active');
});

$(document.body).on('click.fecss.menu-container-show', '.menu-container-show', {}, function(event){
	event.preventDefault();
	$(document.body).trigger('fecss.menu-container.show');
});

$(document.body).on('click.fecss.menu-container-hide', '.menu-container-hide', {}, function(event){
	event.preventDefault();
	$(document.body).trigger('fecss.menu-container.hide');
});
