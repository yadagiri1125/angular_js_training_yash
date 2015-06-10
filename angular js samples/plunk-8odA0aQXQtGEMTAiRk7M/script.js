// Code goes here

var app = angular.module('myDirec', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'First ';
});

app.directive('myDirective', function() {
    return {
    restrict: 'AEC',
    //templateUrl:'info.html'
    template: '<p>Hello Directive !</p>',
    }
});

/*
app.directive('myDirective', function() {
    return {
    restrict: 'E',
    template: '<p>Hello {{name}}!</p>',
    controller: function($scope, $element){
      $scope.name = $scope.name + "Second ";
    },
    link: function(scope, el, attr) {
      scope.name = scope.name + "Third ";
    }
  }
}); */
