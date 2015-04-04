angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, Links) { //$location?
  $scope.link = {}

  $scope.addLink = function(){
    Links.addLink($scope.link)
    .then(function () {
      $location.path('/');
    })
  }

});
