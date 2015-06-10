// Code goes here

var app=angular.module('myApp2', ['myApp1']);

app.controller('myCtrl2', ['$scope', '$rootScope', 'myApp1', function($scope, $rootScope, myApp1){
  
  $scope.msg2='Controller 2';
  
  $scope.myAppMsg=myApp1.msg1;
  
  $scope.showMsg=function(){
    $rootScope.$broadcast('Greet', 'my app 1');
  };
  
  
}]);