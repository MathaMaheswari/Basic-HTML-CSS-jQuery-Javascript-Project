//This JS is for contact us page to vaildate the form

$(document).ready(function() {
	$("#birthdate").datepicker({
		maxDate: new Date(),		//Setting Max date to today's date
		showButtonPanel: true		//Showing buttons in the datepicker panel
	});
	$(".form_success").hide();
	$("#contact_us").validate({  	//Validating the Contact us form using jquery validate plugin	
		errorElement: 'div',		//Showing error message inside div tag
		rules: {							
			email: {			    //Rules for the email textbox
				required: true,
				email: true
			},
			birthdate: {		    //Rules for the date of birth textbox
				required: true,
				date: true
			},
			fName: {				//Rules for the first name textbox
				required: true
			},
			lName: {				//Rules for the last name textbox
				required: true
			},
			phone: {				//Rules for the phone textbox
				required: true,
				phoneUS: true
			},
			comments: {				//Rules for the comments text area
				required: true,
				minWords: 2
			}
		},
		messages: {
			fName: {					//Custom messages written for first name textbox
				required: "Please enter your first name"
			},
			lName: {					//Custom messages written for last name textbox
				required: "Please enter your last name"
			},
			email: {					//Custom messages written for email textbox
				required: "Please enter your email id"
			},
			birthdate: {					//Custom messages written for birthdate textbox
				required: "Please enter your birth date"
			},
			phone: {					//Custom messages written for phone textbox
				required: "Please enter your phone number"
			},
			comments: {					//Custom messages written for comments textbox
				required: "Please enter your comments"
			}
		},
		submitHandler: function(form) {	//On submit of the form
			$("#contact_us").hide();	//Hiding contact form
			$(".contact_text").hide();
			$(".form_success").show();	//Showing form success text
		  }
	});

}); // end ready