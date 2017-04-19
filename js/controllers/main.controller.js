/*global todomvc, angular, Firebase */
'use strict';


carOffersApp.controller('MainController', function TodoCtrl($scope, $location, $firebaseArray) {

    var url = 'https://caroffers-2d1be.firebaseio.com/offers';
	var fireRef = new Firebase(url);

	// Bind the todos to the firebase provider.
	$scope.offers = $firebaseArray(fireRef);
    $scope.newOffer = {
        brand:"",
        model:"",
        package:"",
        modelYear:"",
        optinals:"",
        additional:"",
        city:"",
        dealer:"",
        price:"",
    }
	$scope.newTodo = '';
	$scope.editedTodo = null;


    $scope.addOffer = function(newOffer){

        $scope.offers.$add($scope.newOffer);

        $scope.newOffer = {
            brand:"",
            model:"",
            package:"",
            modelYear:"",
            optinals:"",
            additional:"",
            city:"",
            dealer:"",
        }
    }

	$scope.addTodo = function () {
		var newTodo = $scope.newTodo.trim();
		if (!newTodo.length) {
			return;
		}
		$scope.offers.$add({
			title: newTodo,
			completed: false
		});
		$scope.newTodo = '';
	};






	if ($location.path() === '') {
		$location.path('/');
	}
	$scope.location = $location;
});
