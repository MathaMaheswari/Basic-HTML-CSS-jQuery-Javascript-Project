//This JS is for About page

$(document).ready(function() {
	
	$(".minus").hide();				//Hiding the text on load of the page
	$(".about-wrapper").find(".about-luminous h1:first").toggleClass("minus");	//Making first item to expand on load of the page
	$(".about-wrapper").find(".about-luminous p:first").show();
	$(".about-luminous h1").click(function(evt) {				//On click of h1 heading
		$(this).toggleClass("minus");							//Toggling minus class
		if ($(this).attr("class") == "minus") {					//Checking if h1 has class as minus
		   	$(this).next().slideDown(1000, "easeOutBounce");	//Showing text with easeOutBounce animation
	   	}
	   	if ($(this).attr("class") != "minus")  {				//Checking if h1 not having minus class
	        $(this).next().slideUp(1000, "easeInBounce");		//Showing text with easeInBounce animation
	   	}
	   	evt.preventDefault();									//Preventing load of the page
    }); // end click event


}); // end ready


