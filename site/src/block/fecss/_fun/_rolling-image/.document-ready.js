$(document.body).on('click.fecss.rolling-image-btn', '.rolling-image-btn', {}, function(event){
	event.preventDefault();
	
	var btn = $(this);
	var id = btn.attr('data-img-id');
	
	$('.rolling-image').removeClass('active').addClass('active').find('.img-item').removeClass('on-top').filter(id).addClass('on-top');
});