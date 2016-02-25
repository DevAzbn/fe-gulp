[snp tpl="src/_/concat.plugin.js" ]

$(document).ready(function() {
	
	[snp tpl="src/_/concat.document-ready.js" ]
	
	$(window).on('resize',function(event){
		[snp tpl="src/_/concat.window-resize.js" ]
	}).trigger('resize');
	
	$(window).on('scroll',function(){
		[snp tpl="src/_/concat.window-scroll.js" ]
	}).trigger('scroll');
	
	$('body').on('changeClass',function(){
		[snp tpl="src/_/concat.body.changeClass.js" ]
	});
	
	[snp tpl="src/_/concat.changeClass.js" ]
	
});