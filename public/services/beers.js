app.factory('beers', ['$http', function($http) {

	var beerService = {
			beers: [],

		addBeer: function(newBeer) {
			//add new beer locally
			newBeer.id = this.beers.length;
			beerService.beers.push(newBeer);

			//add new beer to server
			$http.post('/beers', newBeer).then(function(inputData){
				console.log('addBeer succeded');
			},function(err){
				console.log('addBeer failed', err);
			});
		},

		removeBeer: function(index) {
			beerService.beers.splice(index, 1);
		},

		rateBeer: function(id, rate) {
				//update rating value of selected beer
				for (var i = 0; i < this.beers.length; i++) {
					if(this.beers[i].id === id) {
						//beer found, change rate
						this.beers[i].rate = rate;
						break;
					}
				}

			}
	};

	beerService.postNewBeer = function() {

	};

	beerService.getAll = function() {
		return $http.get('/beers').success(function (data) {
    // this copies the response posts to the client side
    // 'beers' under 'beerService'

    console.log(data);

    angular.copy(data, beerService.beers);
  	});
	};

	console.log(beerService);
	console.log(beerService.beer);

	return beerService;


}]);