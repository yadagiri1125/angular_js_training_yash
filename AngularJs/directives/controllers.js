var appModule = angular.module('app', ['app1']);
appModule.controller('SomeController1125',['$scope','SomeController',function($scope,SomeController) {

//function SomeController1125($scope) {
    $scope.message = { text: 'nothing clicked yet' };
    $scope.clickUnFocused = function() {
        $scope.message.text = 'unfocused button clicked';
    };
    $scope.clickFocused = function() {
        $scope.message.text = 'focus button clicked';
    };
    //var appModule = angular.module('app', ['directives']);
}]);

var appModule1 = angular.module('app1', []);
appModule.controller('SomeController',function($scope) {

//function SomeController1125($scope) {
  $scope.Name="";
    //var appModule = angular.module('app', ['directives']);
});