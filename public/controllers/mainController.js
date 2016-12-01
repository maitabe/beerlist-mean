app.controller('MainCtrl', ['$scope', 'beers', function($scope, beers) {
  //post new beer
  // beers.postNewBeer().then(function() {
  //   $scope.beers = beers.beers;
  // });

  //get the array of beers
  beers.getAll().then(function() {
  	$scope.beers = beers.beers;
  });

  // $scope.beers = beers.beers;

  $scope.rate = 0;

  $scope.max = 5;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
    console.log($scope.rate);
  };

  //grab the rating on click and update data
  $scope.rateBeer = function(rate) {
  	//set the rate to the selected beer in service
  	beers.rateBeer(this.beer.id, rate);
  };

  $scope.ratingStates = [
    // {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
	    // {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
	    // {stateOn: 'glyphicon-heart'},
    // {stateOff: 'glyphicon-off'}
  ];

	//add new beer
	$scope.addBeer = function() {

		//unbind the object
		var cloneObj = angular.copy($scope.newBeer);
		//default image if image not exist
		cloneObj.image = 'https://afusec.files.wordpress.com/2014/11/stella-artois.jpg';
		cloneObj.rate = 0;
		//send it to the service
		beers.addBeer(cloneObj);

		$scope.newBeer.name = '';
		$scope.newBeer.style = '';
		$scope.newBeer.abv = '';

	};

	$scope.removeBeer = function() {
		beers.removeBeer(this.$index);
	};


}]);

