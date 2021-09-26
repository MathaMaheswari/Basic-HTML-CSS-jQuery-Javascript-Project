(function($){
	$.fn.highlightMenu = function(options) {
		var defaults= $.extend({
			'fontFamily':'calibri, helvetica, sans-serif',
			'color' : '#ffffff',
		}, options);
		
		return this.each(function() {
			var items = $("li a");
			var o = defaults;
			items.css('font-family', 'calibri, helvetica, sans-serif')
				 .css('font-weight', 'bold')
				 .css('text-decoration', 'none')
				 .css('color', '#fff')
				 .css('display','inline-block');
			items.mouseover(function() {
				$(this).css('background-color', '#fff')
					   .css('color', '#000')
					   .css('font-family', o.fontFamily)
					   .css('font-size','16px');
				});
				items.mouseout(function() {
					$(this).css('background-color', '#00285f')
						   .css('color', '#fff')
						   .css('border-radius', '1em')
						   .css('font-family', 'calibri, helvetica, sans-serif')
						   .css('font-size', '18.4px');
				});
		});
	}
})(jQuery); 