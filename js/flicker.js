//This JS is flicker search functionality

$(document).ready(function(){		//On ready of the document
	var searchTerm = "";
	$(".search-results").hide();	//Hiding search results text
	$("#search").click(function(){	//On click of search button
		var searchTerm = $(".search-input").val();		//Getting search text entered from the textbox
		//This is flicker url having query parameters as the searchTerm
		var flicker_url = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?" +"&tags=" +searchTerm + "&tagmode=all";
		
		//Calling getJSON() method which fetches JSON data from the flicker url using a GET HTTP request
		$.getJSON(flicker_url, function(data){		
			var html = "";
			$.each(data.items, function(i, item){		//Iterating through the results
				html += "<div class='flick-result'>";
				html += "<img src=" + item.media.m + "/></div>";
			});
			$("#searchResults").html(html);				//Appending html to the searchResults div id
			$(".search-results h2").html("Search Results for "+searchTerm);
			$(".search-results").show();				//Showing search results
		});
	});
});