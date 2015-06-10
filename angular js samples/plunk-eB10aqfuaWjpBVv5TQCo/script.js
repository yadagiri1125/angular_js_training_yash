// Code goes here

var app=angular.module('myApp', []);

app.value('movieTitle', 'The Matrix');
app.value('userService', { user: {
                                  name:'Pavan', 
                                  city:'Hyd', 
                                  state:'TS'
                                 }
                          });
app.value('helper', { 
  isEven: function(data){
    return data%2===0;  
  }
});

app.controller('MyController', ['$scope', 'movieTitle', function (scope, movieTitle) {
  scope.name=movieTitle;
}]);

app.controller('UserController', ['$scope', 'userService', function (scope, userService) {
  scope.user=userService.user;
}]);

app.controller('HelperController', ['$scope', 'helper', function (scope, helper) {
  scope.result=helper.isEven(2);
}]);