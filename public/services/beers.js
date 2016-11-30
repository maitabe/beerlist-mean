app.factory('beers', function() {

	var beerList = [
		{
			id: 0,
			name: 'Corona',
			style: 'Pale lager',
			abv: '4.5%',
			image: 'img/corona.jpg',
			rate: 0
		},
		{
			id: 1,
			name: 'Heineken',
			style: 'Light lager',
			abv: '5.4%',
			image: 'img/heineken.jpg',
			rate: 0
		},
		{
			id: 2,
			name: 'Maccabi',
			style: 'Dark lager',
			abv: '7.8%',
			image: 'img/maccabi.jpeg',
			rate: 0
		}

	];

	var addBeer = function(newBeer) {
		newBeer.id = beerList.length;
		beerList.push(newBeer);
	};

	var removeBeer = function(index) {
		beerList.splice(index, 1);
	};

	var rateBeer = function(id, rate) {

		//update rating value of selected beer
		for (var i = 0; i < beerList.length; i++) {
			if(beerList[i].id === id) {
				//beer found, change rate
				beerList[i].rate = rate;
				break;
			}
		}

	};


	return {
		beerList:beerList,
		addBeer:addBeer,
		removeBeer:removeBeer,
		rateBeer:rateBeer
	};

});