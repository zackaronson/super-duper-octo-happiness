var cities = [
'Select A City',
'Austin',
'LA',
'NYC',
'SF',
'Sydney'

]


$(document).ready(function(){

	for (var i = 0; i < cities.length; i++) {

		var option = $('<option>', {
			value: cities[i],
			text: cities[i]
		});


	$('#city-name').append(option);
	}

	$('#city-name').on('change', function(){
		var city = $('#city-name').val();
		city = city.toLowerCase().trim();
		// console.log(city)
	

	if(city === 'austin'){

		$('body').css('background', 'url(images/austin.jpg');
	}

	else if(city === 'la'){

		$('body').css('background', 'url(images/la.jpg');
	}

	else if(city === 'nyc'){

		$('body').css('background', 'url(images/nyc.jpg');
	}

	else if(city === 'sf'){

		$('body').css('background', 'url(images/sf.jpg');
	}

	else if(city === 'sydney'){

		$('body').css('background', 'url(images/sydney.jpg');
	}

	else {

		$('body').css('background', 'url(images/citipix_skyline.jpg');
	}


});







});