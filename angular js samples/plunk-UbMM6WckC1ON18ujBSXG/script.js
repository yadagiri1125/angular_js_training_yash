// Code goes here

var app = angular.module("MyApp", []);

app.controller("EmpCtrl", function($scope, $http) {
  $http.get('emps.json').
    success(function(data, status, headers, config) {
      $scope.employees = data;
    }).
    error(function(data, status, headers, config) {
      // log error
      alert("service failed!");
    });
});