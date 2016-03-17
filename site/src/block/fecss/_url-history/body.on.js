	
	$(document.body).on('fecss.url-history.get', null, {}, function(event, href, target, addToHistory){
		event.preventDefault();
		
		$.get(href, {}, function(data) {
			// Обновление только текстового содержимого в сером блоке
			$(target).html($(data).find(target).html());
			
			// Если был выполнен клик в меню - добавляем запись в стек истории сеанса
			// Если была нажата кнопка назад/вперед, добавлять записи в историю не надо
			
			if(addToHistory == true) {
				// Добавляем запись в историю, используя pushState
				window.history.pushState({target : target}, null, href);
			}
		});
		
	});
	
	window.addEventListener('popstate', function(event) {
		//alert(JSON.stringify(event.state));
		$(document.body).trigger('fecss.url-history.get', [window.location.pathname, event.state.target, false]);
	}, false);
	