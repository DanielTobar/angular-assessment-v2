angular.module("app").controller("mainCtrl",function ($scope, service, $stateParams) {
  $scope.petData = function() {
      service.getAllThePets("").then(function(response) {
          $scope.items = response.data;
          console.log(response.data);
      });
  };
  $scope.petData();

})
