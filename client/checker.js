angular.module('naughtyOrNiceChecker', [])

.controller('naughtyOrNiceCtrl', ['$scope', function($scope) {
	$scope.isNaughtyOrNice = '';
	$scope.checkerName = '';
	$scope.imageUrl = '';

	$scope.checkNaughtyOrNice = function(user) {
		
		var randomNum = Math.floor(Math.random() * (10 - 1)) + 1;

		if(randomNum > 5) {
			$scope.isNaughtyOrNice = 'Looks like ' + user + ' has been very nice this year!';
			$scope.imageUrl = "./christmas-Gift.gif";
		} else {
			$scope.isNaughtyOrNice = 'Looks like ' + user + ' has been very naughty this year!';
			$scope.imageUrl = "./santa-flipping-the-bird.gif";
		}
		$scope.checkerName = user;
	};
}]);