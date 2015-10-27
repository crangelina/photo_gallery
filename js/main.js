$(document).ready(function(){
	$('button').on('click', function(){
		var doggy = $(this).text();

		var flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
		var flickrOptions = {
			tags: doggy,
			format: "json"
		};

		
		function displayPhotos(data) {
			var $hexList = $('<ul>');
			$.each( data.items, function (i, photo) {
				var $hexListItem = $('<li>');
				var $hex = $('<div>');
				$hex.addClass('hexagon');
				$hex.css("background-image", "url(" + photo.media.m + ")");
			

			var $hexTop = $('<div>');
			$hexTop.addClass('hexTop');

			var $hexBottom = $('<div>');
			$hexBottom.addClass('hexBottom');

			$hex.prepend($hexTop);
			$hex.append($hexBottom);
			$hexListItem.append($hex);
			$hexList.append($hexListItem);
			$('.photos').append($hexList);

			});
		};
		$.getJSON(flickerAPI, flickrOptions, displayPhotos);
	});
});