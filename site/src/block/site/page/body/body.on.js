
/*
// зададим обработчик
$('#foo').on('custom', null, {otherParam:'uha-ha!'}, function(event, param1, param2){
	alert(param1 + "\n" + param2); // так осуществляется доступ к данным extraParameters
	alert(event.data.otherParam);  // а так к данным eventData
	// оригинальное JS-событие event.originalEvent
});
 
// вызовим событие методом trigger, в результате будет запущен наш обработчик
$('#foo').trigger('custom', ['Custom', 'Event']);
*/

$(document.body).on('fecss.default',	null, {}, function(event){
	console.log('body trigger:fecss.default');
});

$(document.body).on('fecss.init',		null, {}, function(event){
	console.log('body trigger:fecss.init');
});
