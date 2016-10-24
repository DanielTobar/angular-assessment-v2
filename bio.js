angular.module("app").controller("bioCtrl", function($scope, service, $stateParams) {

  $scope.petData = function() {
      service.getAllThePets($stateParams.obj).then(function(response) {
          $scope.bio = response.data;
          console.log(response.data);
      });
  };
  $scope.petData();

});
