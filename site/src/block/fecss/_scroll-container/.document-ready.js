	
	$('.scroll-container').each(function(index){
		
		var block = $(this);
		var target = $(block.attr('data-target') + '.scroll-element').eq(0);
		var otarget = target.find('.scroll-overflow').eq(0);
		var line = block.find('.scroll-line');
		var scroll = line.find('.scroll');
		var type = 0;
		
		block.on('init', function(event){
			event.preventDefault();
			
			console.log('.scroll-container init');
			
			if(block.hasClass('horizontal')) {
				type = 0;
				
				scroll.width(line.width() * (target.outerWidth(true) / otarget.outerWidth(true)));
				
				block.attr('data-ratio-h', (otarget.outerWidth(true) / (line.outerWidth(true))));
				
				scroll.draggable({
					axis:'x',
					containment : 'parent',
					scroll:false,
					drag:function(event, ui){
						target.scrollLeft(ui.position.left * block.attr('data-ratio-h'));
					},
				});
				
			} else if(block.hasClass('vertical')) {
				type = 1;
				
				scroll.height(line.height() * (target.outerHeight(true) / otarget.outerHeight(true)));
				
				block.attr('data-ratio-v', (otarget.outerHeight(true) / (line.outerHeight(true))));
				
				scroll.draggable({
					axis:'y',
					containment : 'parent',
					scroll:false,
					drag:function(event, ui){
						target.scrollTop(ui.position.top * block.attr('data-ratio-v'));
					},
				});
			}
		}).trigger('init');
		
		target.on('scroll', function(event){
			if(type == 0) {
				scroll.css({'left':target.scrollLeft() / block.attr('data-ratio-h')});
			} else if(type == 1) {
				scroll.css({'top':target.scrollTop() / block.attr('data-ratio-v')});
			}
		});
		
	});
	