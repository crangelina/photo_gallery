
// CLICKING BREED BUTTON

$(document).ready(function(){
	
	$('.breed').on('click', function(){
		$('.photos').empty();
		$('.pickBreedForm').hide();
		$('.pickBreedButton').show();
		var doggy = $(this).text();

		var flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
		var flickrOptions = {
			tags: doggy,
			format: "json"
		}; // end flickrOptions

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

			}); // end $.each loop
		}; // end displayPhotos()
		$.getJSON(flickerAPI, flickrOptions, displayPhotos);
	}); // end button click
}); // end on ready



//------------------------------------------------------------------------



// CLICKING "PICK BREED" BUTTON

$(document).ready(function(){

	$('.pickBreedButton').on('click', function(){
		$(this).hide();
		$('.photos').empty();
		$('.pickBreedForm').show();
	});

	// FORM SUBMIT

		$('.pickBreedForm').submit(function(event){ 
			event.preventDefault();
			$('.pickBreedForm').hide();
			$('.pickBreedButton').show();
			var doggyInput = $('.pickBreedInput').val();


			var flickerAPI1 = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
			var flickrOptions1 = {
				tags: doggyInput,
				format: "json"
			};

			function displayPhotos1(data1) {
				var $hexList = $('<ul>');
				$.each( data1.items, function (i, photo1) {
					var $hexListItem = $('<li>');
					var $hex = $('<div>');
					$hex.addClass('hexagon');
					$hex.css("background-image", "url(" + photo1.media.m + ")");
				

				var $hexTop = $('<div>');
				$hexTop.addClass('hexTop');

				var $hexBottom = $('<div>');
				$hexBottom.addClass('hexBottom');

				$hex.prepend($hexTop);
				$hex.append($hexBottom);
				$hexListItem.append($hex);
				$hexList.append($hexListItem);
				$('.photos').append($hexList);
				$('.pickBreedInput').val(null);

				}); // end $.each loop
			}; // end displayPhotos()
			$.getJSON(flickerAPI1, flickrOptions1, displayPhotos1);
		}); // end form submit
}); // end ready



//----------------------------------------------------------------
// --------------------   PERSONAL NOTES   -----------------------
//----------------------------------------------------------------

	
	// responsiveness of hexagons
	// grab pictures at random
	// make sure each picture fits hexagon format
		// what's causing it? -- size of picture?? 
		// some way to filter??
	// when click on hexagon
		// lightbox that shows entire image
		//use bootstrap lightbox
	//load more at bottom 




