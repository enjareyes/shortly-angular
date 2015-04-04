angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links) {
  // angular.extend($scope, Links);

  $scope.data = {}

  $scope.getLinks = function(){
    Links.getLinks()
    .then(function(data){
      $scope.data.links = data;
    });
  }

  $scope.getLinks();

});
