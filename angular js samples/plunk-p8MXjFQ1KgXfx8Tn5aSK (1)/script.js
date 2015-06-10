var app = angular.module('myApp', []);

app.controller('MainCtrl', function ($scope) {
  
  $scope.amount='15000';
  
  $scope.val = 1234.56789;
  
  $scope.numbers = [1,2,3,4,5,6,7,8,9];
  $scope.letters = "abcdefghi";
  $scope.longNumber = 2345432342;
});