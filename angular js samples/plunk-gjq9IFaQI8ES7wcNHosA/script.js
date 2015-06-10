// Code goes here

var app=angular.module('myApp1',[]);

app.controller('myCtrl1', function($scope, $rootScope){
  
  $scope.msg1='Controller 1';
  
  $scope.$on('Greet', function(event, data){
      alert('my app controller -' + data);
  });
  
});