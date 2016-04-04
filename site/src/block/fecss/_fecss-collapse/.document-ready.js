
$(document.body).on('click.fecss.collapser', '.fecss-collapse .collapser', {}, function(event){
	event.preventDefault();
	
	console.log('body trigger:click.fecss.collapser');
	
	var btn = $(this);
	var collapse = btn.closest('.fecss-collapse');
	collapse.toggleClass('active');
	
});
