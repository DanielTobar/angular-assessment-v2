angular.module("app",['ui.router'])
.directive('pet', function(){
  return {
    restrict: "E",
    templateUrl: "./views/pet-tmpl.html",
    scope:{
      info: "="
    }
  };
})
;
