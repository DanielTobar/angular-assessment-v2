var urlRoute = "http://practiceapi.devmounta.in/pets/" ;

angular.module("app").service("service", ['$http', '$q', function($http, $q,$rootScope) {
    this.getAllThePets = function(extension) {
      console.log(extension);
        var deferred = $q.defer();
        $http({
            method: "GET",
            url: "http://practiceapi.devmounta.in/pets"+ "/" +  extension
        }).then(function(response, err) {
            if (response) {
                deferred.resolve(response);
            } else if (err) {
                console.log("here");
            }
        });
        return deferred.promise;
    };

    this.getMeAPetDetails = function() {
        var deferred = $q.defer();
        $http({
            method: "GET",
            url: urlRoute
        }).then(function(response, err) {
            if (response) {
                deferred.resolve(response);
            } else if (err) {
                console.log("here");
            }
        });
        return deferred.promise;
    };
}]);
