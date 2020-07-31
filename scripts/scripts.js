jQuery(function () {
	/* ADDITIONAL MENU*/
	$('.user_actions').on('click', function(){
		$('.additional_menu').toggleClass('_active');
	});

	/*BURGER*/
	$('.burger_menu').on('click', function(){
		$('.burger').toggleClass('_active_bu');
		$('.burger_before').toggleClass('_active_bef_bu');
		$('.burger_after').toggleClass('_active_af_bu');
		$('.menu').toggleClass('responsive');
	

	});
	/* SLIDER CASINO */
	 var height = $('._2_').height() 
	$('.next').on('click', function(){
		$('._2_').css({
			'position' : 'absolute',
			'left' : '0%',
			'top' : '75px',
			'height':height + 'px'});
		
	});
	$('.prev').on('click', function(){
		$('._2_').css({
			'position' : 'absolute',
			'left' : '-100%',
			'top' : '75px',
			'height':height + 'px'});
	});

	/* SLIDER LOT */
	$('.lots_slider_item').slick({
	  	slidesToShow: 3,
	  	arrows: true,
	  	infinity: true,
	  	appendArrows:$('.lots_slider_panel'),
	  	nextArrow: '<div class="lots_slider_arrow -next-"><img src="img/lots/arrow.png" alt=""></div>',
	  	prevArrow: '<div class="lots_slider_arrow -prev-"><img src="img/lots/arrow.png" alt=""></div>',
	  	rows: 0,
	  	speed: 300,
	  	easing: 'ease',
	  	waitForAnimate: false,
	  	touchMove: true,
	  	responsive:[
	  		{
	  			breakpoint: 757,
	  			settings:{
	  				slidesToShow: 1,
	  				arrows: false,
	  			}
	  		}
	  	],
	  });
	$('.slider_quote').slick({
	  	slidesToShow: 1,
	  	arrows: true,
	  	infinity: true,
	  	
	  	appendArrows:$('.refresh__button__slider'),
		prevArrow: '<div class="prevArrow" style="display: none"></div>',
	  	nextArrow: '<div class="refresh__button"><img src="img/quotes/refresh.png" alt=""></div>',
	  	
	  	rows: 0,
	  	speed: 300,
	  	easing: 'ease',
	  	waitForAnimate: false,
	  	touchMove: true,
	  	
	  });
	var rotate = 0;
	$('.refresh__button').on('click', function(){
		rotate += 360;
		$('.refresh__button>img').css({'transform' :`rotate(${rotate}deg)`,
					'transition':'all .5s linear'})
	});


	$('.subscribe_form_input>input').on('focus', function(){
		$('.subscribe_form_input>input').toggleClass('_focus');
		if ($('.subscribe_form_input>input').val() == 'Ваш E-mail') {
			$('.subscribe_form_input>input').val('');
		}
	});
	$('.subscribe_form_input>input').on('blur', function(){
		$('.subscribe_form_input>input').toggleClass('_focus');
		if ($('.subscribe_form_input>input').val() == '') {
			$('.subscribe_form_input>input').val('Ваш E-mail');
		}
	});
});



	/*BUTTON JOIN US HOVER*/
/*	$('._btn').mouseenter(function(){
		var parentOffset = $(this).offset(); 
 		var relX = event.pageX - parentOffset.left;
  		var relY = event.pageY - parentOffset.top;
  		
  		var addDiv = document.createElement('div');
  		addDiv.classList.add('pulse');
  		$('.slider_button').append(addDiv);

	});
	$('._btn').mouseleave(function(){
		$('.pulse').remove();

	});

*/
/*		$('.burger_before').css({
			'transform' : 'translate(0, 10px) rotate(405deg)',
			'transition' : '.5s'

	});
		$('.burger_after').css({
			'transform' : 'translate(0, -10px) rotate(495deg)',
			'transition' : '.5s'
		});
		$('.burger').css({
			'opacity' :'0',
			'transition':'.5'	});
	*/
