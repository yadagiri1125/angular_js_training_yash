// Code goes here

var app=angular.module('myApp', []);

app.constant('MOVIE_TITLE', 'The Matrix');

/*app.constant('userService', { user: {
                                  name:'Pavan', 
                                  city:'Hyd', 
                                  state:'TS'
                                 }
                          });
app.constant('helper', { 
  isEven: function(data){
    return data%2===0;  
  }
});*/

app.controller('MyController', function ($scope, MOVIE_TITLE) {
  $scope.name=MOVIE_TITLE;
});

/*app.controller('UserController', ['$scope', 'userService', function (scope, userService) {
  scope.user=userService.user;
}]);

app.controller('HelperController', ['$scope', 'helper', function (scope, helper) {
  scope.result=helper.isEven(2);
}]);*/