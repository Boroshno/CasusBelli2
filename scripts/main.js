$(document).ready(function(){
	$('#mapglobal').mouseenter(function(event ) {
		$('#mappanel').clearQueue().stop(true, true).fadeOut( 500 );
	})
	$('#mapglobal').mouseleave(function(event ) {
		$('#mappanel').clearQueue().stop(true, true).fadeIn( 500 );
	})
	
	$('.map').maphilight();
	
	$('.mapglobal').width($('#main').width());
	
	var mainwidth = $('#main').width();
	$('#carouselinner').width($('#main').width());
	$('#carouselinner').css('left', mainwidth);
	
	$('#arrow').click(function() {
		$('#carouselinner').animate({
			'left': 0
		}, 1000, function(){
			
		});
	});
	
	$('.tomap').click(function(){
		$('#carouselinner').animate({
			'left': mainwidth
		}, 1000, function(){
			
		});
	});
	
	$('.bxslider').bxSlider();
});