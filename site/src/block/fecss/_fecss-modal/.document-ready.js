	
	//(function(block) {
	$('.b-modal-container').each(function(index){
		
		var block = $(this);
		
		var mb = block.find('.modal-block').eq(0);
		var wc = block.find('.white-container').eq(0);
		//var title = block.find('.modal-title .content').eq(0);
		
		var hide_modal = block.find('.hide-modal');
		
		var items = block.find('.item');
		//var lastactive;
		
		
		block.on('setActive', function(event){
			block.css({height : $(document).height() + 'px',}).addClass('active');
			mb.css({top : $(document).scrollTop() + 50 + 'px',});
			//items.filter('.active').removeClass('active');
		});
		
		block.on('setPassive', function(event){
			block.removeClass('active');
		});
		
		block.on('click', function(event){
			event.preventDefault();
			block.trigger('setPassive');
		});
		
		hide_modal.on('click', function(event){
			event.preventDefault();
			block.trigger('setPassive');
		});
		
		wc.on('click', function(event){
			//event.preventDefault();
			event.stopPropagation();
		});
		
	//})($('.b-modal-container'));
	});
		
		$('.b-modal-container .item').on('click', function(event){
			//event.preventDefault();
			event.stopPropagation();
		});
		
		$('.b-modal-container .item').on('setActive', function(event){
			//event.preventDefault();
			//event.stopPropagation();
			
			//lastactive = $('.b-modal-container .item.active');
			//$('.b-modal-container .item').removeClass('active');
			
			//title.html($(this).attr('data-title'));
			$(this).closest('.b-modal-container').trigger('setActive');
			$(this).closest('.b-modal-container').find('.grid-row.item').removeClass('active');
			$(this).addClass('active');
		});
		
		$('.b-modal-container .item').on('setPassive', function(event){
			//event.preventDefault();
			//event.stopPropagation();
			$(this).removeClass('active').closest('.b-modal-container').trigger('setPassive');
			//if(lastactive.size()) {
			//	lastactive.eq(0).trigger('setActive');
			//}
		});
		
		$('.b-modal-btn').on('click', function(event){
			event.preventDefault();
			event.stopPropagation();
			
			console.log('.b-modal-btn click');
			
			var btn = $(this);
			var id = btn.attr('href');
			var el = $('.b-modal-container .item').filter(id);
			if(el.size() > 0) {
				el.trigger('setActive');
			} else {
				el.trigger('setPassive');
			}
		});
		
		$('.b-modal-hide-btn').on('click', function(event){
			//event.preventDefault();
			event.stopPropagation();
			
			$(this).closest('.b-modal-container').find('.item.active').trigger('setPassive');
			//$('.b-modal-container .item.active').trigger('setPassive');
		});
		
		$('.b-modal-fastlook').on('click', function(event){
			event.preventDefault();
			event.stopPropagation();
			
			console.log('.b-modal-fastlook click');
			
			var btn = $(this);
			var id = btn.attr('data-product_id');
			var el = $('.b-modal-container .item#modal-fastlook-' + id);
			if(el.size() > 0) {
				el.trigger('setActive');
			} else {
				el.trigger('setPassive');
			}
		});