$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	if (scroll >= 50) {
		$('.navbar').addClass('navbar-repadding');
		$('.navbar').addClass('navbar-bgcolor');
	}
	if (scroll <= 50) {
		$('.navbar').removeClass('navbar-repadding');
		$('.navbar').removeClass('navbar-bgcolor');
	}

});

$(document).ready(function(){
	$('input[type="checkbox"]').click(function(){
		if($(this).prop('checked') == true){
			$('.navbar').addClass('navbar-bgcolor');
		}
		else if($(this).prop('checked') == false && !$('.navbar').hasClass('navbar-repadding')){
			$('.navbar').removeClass('navbar-bgcolor');
		}
	});

	$('.buton-filtru').click(function(){
		var filtru = $(this).attr('id');
        
		if(filtru == 'all') {
			$('.meniu-col').show('1000');
			$('.buton-filtru').removeClass('filtru-activ');
			$('.buton-filtru').filter('#'+filtru).addClass('filtru-activ');
		}
		else {
			$('.meniu-col').not('#'+filtru).hide('3000');
			$('.meniu-col').filter('#'+filtru).show('3000');
			$('.buton-filtru').removeClass('filtru-activ');
			$('.buton-filtru').filter('#'+filtru).addClass('filtru-activ');
        }
    });

});