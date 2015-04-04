angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) { //$location?
  angular.extend($scope, Links)

  $scope.addLink = function(url){
    $scope.isWorking = true;
    Links.addLink(url)
    .then(function () {
      $scope.isWorking = false;
      $location.path('/');
    })
  }

});
