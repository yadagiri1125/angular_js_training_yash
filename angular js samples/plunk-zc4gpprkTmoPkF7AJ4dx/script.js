// Code goes here

var app=angular.module('myApp',[]);

app.controller('myCtrl', function($scope){
  $scope.cities=['Hyderabad','Chennai', 'Delhi', 'Bangalore'];
  $scope.city='Delhi';
  
  $scope.$watch('city', function(newValue, oldValue){
    console.log('Changed from '+ oldValue + ' to '+ newValue);
  });
  
   $scope.$watch('name', function(newValue, oldValue){
    console.log($scope.name);
  });
  
});