 var myapp = angular.module("myapp", []);

 myapp.controller("MyController", function($scope){


 $scope.pages=[
                {page: 'page1.html', display: 'Why AngularJS'}, 
                {page: 'page2.html', display: 'Extensibility'}
              ];
 

});



