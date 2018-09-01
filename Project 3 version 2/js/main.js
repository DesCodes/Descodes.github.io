$(document).ready(function(){



	// adds position fixed to menu-nav after scrolling down
	$(window).scroll(function(){
		var topOfScreen = $(window).scrollTop();

		if ( topOfScreen > $('.menu-nav').offset().top )
			{$('.menu-nav').addClass('fixed');}

		if ( topOfScreen < $('.menu-nav-box').offset().top )
			{$('.menu-nav').removeClass('fixed');}

		});


	//adds orange text to menu-nav
	$(window).scroll(function(){
		var topOfNav = $('.menu-nav').offset().top;
		var bottomOfNav = $('.menu-nav').outerHeight();
		var menuNav = topOfNav + bottomOfNav

		//adds orange colour text to side-dish
		if ( (menuNav > $('.menu').offset().top) && (menuNav < $('.entree').offset().top) )
			{$('.side-dish-a').addClass('orange');}

		else {$('.side-dish-a').removeClass('orange');}


		//adds orange colour text to entree
		if ( (menuNav > $('.entree').offset().top) && (menuNav < $('.drinks').offset().top) )
			{$('.entree-a').addClass('orange');}
		else {$('.entree-a').removeClass('orange');}


		//adds orange colour text to drinks
		if ( (menuNav > $('.drinks').offset().top) && (menuNav > $('.entree').offset().top) )
			{$('.drinks-a').addClass('orange');}

		else {$('.drinks-a').removeClass('orange');}	

		});



	//scroll to side-dish, upon clicking menu-nav
	$('.side-dish-a').click(function(){
		$('html').animate({scrollTop: $('#side-dish').offset().top-40})
		});
	//scroll to entree, upon clicking menu-nav
	$('.entree-a').click(function(){
		$('html').animate({scrollTop: $('#entree').offset().top-40})
		});
	//scroll to drinks, upon clicking menu-nav
	$('.drinks-a').click(function(){
		$('html').animate({scrollTop: $('#drinks').offset().top-40})
		});


	//scroll to top for arrow
	$('.arrow').click(function(){
		$('html').animate({scrollTop: $('header').offset().top})
	});
	//upon scrolling, show .arrow
	$(window).scroll(function(){
		var topOfScreen = $(window).scrollTop();

		if ( topOfScreen > $('.menu-nav-box').offset().top )
			{$('.arrow').addClass('visible');}

		if ( topOfScreen < $('.menu-nav-box').offset().top )
			{$('.arrow').removeClass('visible');}
		});









});