var app = angular.module('imageSlideApp', []);

app.controller('MainCtrl', ['$scope', function($scope) {

	$scope.images = {
		image1: 'img/homepage_surfer_4K.jpg',
		image2: 'img/homepage_surfer_SD.jpg'
	}

}]);
