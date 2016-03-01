
$('.fecss-jsviewed').each(function(){
	
	var block = $(this);
	var flt = block.attr('data-jsviewed-filter')
	
	var Viewed = new jsViewed(flt);
	
	block.on('rebuild', function(event){
		var vwd = Viewed.getAll();
		if(vwd != null) {
			for(var k in vwd) {
				var item = vwd[k];
				var div = $('<div/>',{
					html : JSON.stringify(item),
				});
				div.appendTo(block);
			}
		}
	});
	block.trigger('rebuild');
	
	block.on('create-view', function(event){
		console.log('.fecss-jsviewed[data-jsviewed-filter="' + flt + '"] create-view');
	});
	
	block.on('clear', function(event){
		Viewed.clear();
		block.trigger('rebuild');
	});
	
	block.find('.jsviewed-clear-btn').on('click.jsviewed', function(event){
		event.preventDefault();
		block.trigger('clear');
	});
	
	(function(){
		Viewed.add({
			id : new Date().getTime(),//1456862349352,//
			title : 'some test',
		});
		block.trigger('create-view');
	})();
	
})

