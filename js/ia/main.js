$(document).ready(function(){
	// This function handles nav-toggle click. Toggles child list open and closed.//
	$('.js-nav-toggle').on('click', function(){
		//console.log ('click'); // This is for debugging. Prints the word click in Inspect Element Console.//
		// Show / hide child items in section nav//
		//
		$(this).parent().next('.nav-breadcrumb-childitems').toggleClass('is-collapsed');
		
		if 
		//yes, do this.//
		($(this).hasClass('is-closed'))
		{	
		($(this).removeClass('is-closed').text('-'));
		}
		else
		//no, do this//
		{
		($(this).addClass('is-closed').text('+'));
			
		}
		;
	});

	if ($(window).width() < 900) {
		console.log ($(window).width());
		$('.js-primary-nav-toggle').on('click', function(event){
		//console.log ('click'); // This is for debugging. Prints the word click in Inspect Element Console.//
		event.preventDefault();	
			$(this).next('.nav-primary-flyout').toggleClass('is-collapsed');
			
			if ($(this).hasClass('is-closed')){	
				$(this).find('nav-primary-toggle').removeClass('is-closed').text('-');
			} else {
				$(this).find('nav-primary-toggle').addClass('is-closed').text('+');
			}
		});
	}
	//END nav-toggle click.

	//This JS is for the Login Menu.

	$('.js-flyout-toggle').on('click', function(){
		//console.log ('click'); // This is for debugging. Prints the word click in Inspect Element Console.//
		// Show / hide child items in section nav//
		//
		$(this).next('.user-login-flyout').toggleClass('is-collapsed');
		
		var buttontext=$('.user-login-button').text();

		console.log(buttontext);

		buttontext==('Log In') ? buttontext='Close' : buttontext='Log In';

		// The line above is an alternate way to do if / then statements. This approach is called a conditional (ternary) operator.

		console.log(buttontext);

		$('.user-login-button').text(buttontext);

		/*if (buttontext=='Log In') {
		$('.user-login-button').text('Close');
			//buttontext="Close";
		}

		else {
		$('.user-login-button').text('Log In');
		}
		/*console.log(buttontext);*/
	//END nav-toggle click.
	});

 
});

/*console log notes
//$(document).ready(function() {
	
	console.log('hello');
	
}
	
	$('.js-nav-toggle').on(click;function()
	{
		
	}
}
end console log notes*/
