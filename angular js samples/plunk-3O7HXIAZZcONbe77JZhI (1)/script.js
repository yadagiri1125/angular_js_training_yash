 
var app = angular.module('app', []);

app.service('MathService', function() {
    this.add = function(a, b) { return a + b };
     
    this.subtract = function(a, b) { return a - b };
     
    this.multiply = function(a, b) { return a * b };
     
    this.divide = function(a, b) { return a / b };
});
 
app.service('CalculatorService', function(MathService){
     
    this.square = function(a) 
    { 
      return MathService.multiply(a,a); 
      
    };
    
    this.cube = function(a) { 
      return MathService.multiply(a, MathService.multiply(a,a)); 
      
    };
 
});
 
app.controller('CalculatorController', function($scope, CalculatorService, MathService) {
 
    $scope.add = function() {
        $scope.answer1 = MathService.add($scope.number1, $scope.number2);
    };
    
    $scope.sub = function() {
        $scope.answer1 = MathService.subtract($scope.number1, $scope.number2);
    };
    
    $scope.mult = function() {
        $scope.answer1 = MathService.multiply($scope.number1, $scope.number2);
    };
    
    $scope.div = function() {
        $scope.answer1 = MathService.divide($scope.number1, $scope.number2);
    };
 
    $scope.doSquare = function() {
        $scope.answer = CalculatorService.square($scope.number);
    };
 
    $scope.doCube = function() {
        $scope.answer = CalculatorService.cube($scope.number);
    };
});