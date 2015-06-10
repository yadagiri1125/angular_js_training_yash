var myapp = angular.module("myapp", []);

myapp.controller("MyController", ['$scope', '$interval',
      function($scope, $interval) {


    $scope.clock = new Date();
 
    
    var myVar;

    function myFunction() {
        myVar = setInterval(alertFunc, 100);
    }
    
    function alertFunc() {
         $scope.clock = new Date();
         $scope.apply();
    }
    
    myFunction();
}]);

