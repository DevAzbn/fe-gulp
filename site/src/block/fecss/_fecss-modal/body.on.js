
$(document.body).on('fecss.modal.show.after', null, {}, function(event, modal, wc){
	event.preventDefault();
	
	console.log('body trigger:fecss.modal.show.after');
	
	
	
});

$(document.body).on('fecss.modal.hide.after', null, {}, function(event, modal, wc){
	event.preventDefault();
	
	console.log('body trigger:fecss.modal.hide.after');
	
	
	
});

$(document.body).on('fecss.active.set', '.fecss-modal .white-container', {}, function(event, modal, wc){
	event.preventDefault();
	
	console.log('.white-container trigger:fecss.active.set');
	
	
	
});

$(document.body).on('fecss.active.unset', '.fecss-modal .white-container', {}, function(event, modal, wc){
	event.preventDefault();
	
	console.log('.white-container trigger:fecss.active.unset');
	
	
	
});

$(document.body).on('click.fecss.modal.show', '.fecss-modal-btn', {}, function(event){
	event.preventDefault();
	
	console.log('body trigger:click.fecss.modal.show');
	
	var btn = $(this);
	var href = btn.attr('href');
	
	var wc = $(document.body).find('.fecss-modal ' + href + '.white-container')
	
	if(wc.size()) {
		
		var modal = wc.closest('.fecss-modal');
		if(!modal.hasClass('active')) {
			modal.addClass('active');
		}
		
		var bc = modal.find('.black-container');
		bc.css({top : $(document).scrollTop() + 50 + 'px',});
		
		wc.addClass('active').trigger('fecss.active.set');
		
		$(document.body).trigger('fecss.modal.show.after', [modal, wc]);
		
	}
});

$(document.body).on('click.fecss.modal.hide', '.fecss-modal .white-container .hide-modal', {}, function(event){
	event.preventDefault();
	
	console.log('body trigger:click.fecss.modal.hide');
	
	var btn = $(this);
	var wc = btn.closest('.white-container');
	var modal = btn.closest('.fecss-modal');
	
	if(modal.find('.white-container.active').size()) {
		
		modal.removeClass('active');
		wc.removeClass('active').trigger('fecss.active.unset');
		
		$(document.body).trigger('fecss.modal.hide.after', [modal, wc]);
		
	}
	
});
