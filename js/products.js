//This JS is responsible to get products json and displaying it in front end

$(document).ready(function() {		//On ready of the document
	$.getJSON("products-data.json", function(data) {	//Calling products-data json file to fetch the data
		$.each(data.products, function(i, f) {			//Iterating through the json response.
		
		//Forming tr element
          var tblRow = "<tr>" + "<td>" + (i+1) + "</td>" + "<td>" + f.productName + "</td>" +		
           "<td>" + f.Stock + "</td>" + "<td>" + f.Quantity + "</td>" + "<td>" + f.Size + "</td>" + "<td>" + f.Color + "</td>" + "</tr>"
           $(tblRow).appendTo("#products-table tbody");			//Appending tr element to tbody tag
     });
	 
	 $("#products-table th").css({"color":"white","background-color":"#00285f"});		//Setting css for table header elements
	 $("#products-table tbody> tr").hover(function(){			//Setting css on mouse hover of the tr elements
		  $(this).css("background-color", "#00285f")
				 .css("color","#fff");
		  }, function(){
		  $(this).css("background-color", "#fff")				//Setting css on hover out of the tr elements
				 .css("color","#000");
		  $("#products-table tr:even").css("background-color","#f2f2f2");
		});
		

	});
	
	$("#products-table tr:even").css("background-color","#f2f2f2");	//Setting even table row elements background colour
	
});	//end ready