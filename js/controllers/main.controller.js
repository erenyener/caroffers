/*global todomvc, angular, Firebase */
'use strict';


carOffersApp.controller('MainController', function TodoCtrl($scope, $location, $firebaseArray, NgTableParams) {

    var url = 'https://caroffers-2d1be.firebaseio.com/offers';
	var fireRef = new Firebase(url);

	// Bind the todos to the firebase provider.
	$scope.offers = $firebaseArray(fireRef);
    $scope.loading = true;
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
    };

    var offersDataSet = [];

    $scope.offers.$loaded().then(function(){
        angular.forEach($scope.offers, function(offer) {
            offersDataSet.push(offer);
        })

        $scope.tableParam = new NgTableParams({}, {dataset: offersDataSet});
        $scope.loading = false;

    });




	$scope.newTodo = '';
	$scope.editedTodo = null;


    $scope.addOffer = function(isInvalid){

        if(!isInvalid){
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

            location.reload();
        }

    }






	if ($location.path() === '') {
		$location.path('/');
	}
	$scope.location = $location;
});
