angular.module('naughtyOrNiceChecker', [])

.controller('naughtyOrNiceCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.isNaughtyOrNice = '';
	$scope.user = {};
	$scope.imageUrl = '';

	$scope.checkNaughtyOrNice = function(name) {
		var randomNum = Math.floor(Math.random() * (3 - 1)) + 1;
		if(randomNum <= 1) {
			$scope.user.name = name;
			$scope.user.naughty = false;
			$scope.user.nice = (randomNum === 1) || false;
			$scope.isNaughtyOrNice = 'Looks like ' + name + ' has been very nice this year!';
			$scope.imageUrl = "./christmas-Gift.gif";
		} else {
			$scope.user.name = name;
			$scope.user.naughty = (randomNum === 2) || false;
			$scope.user.nice = false;
			$scope.isNaughtyOrNice = 'Looks like ' + name + ' has been very naughty this year!';
			$scope.imageUrl = "./santa-flipping-the-bird.gif";
		};

		$http({
		  method: 'POST',
		  url: '/update',
		  data: $scope.user,
		}).then(function successCallback(response) {
		    // this callback will be called asynchronously
		    // when the response is available
		  }, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });

	};
}]);


