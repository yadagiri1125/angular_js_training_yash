// Code goes here

var app = angular.module('myDirec', []);

app.controller('myController', function($scope){
  $scope.name='Pavan';
  $scope.city='Hyd';
});
app.directive('myDirective', function() {
  return {
    restrict: 'E', 
    replace: true,
    template: '<div> Hi {{myName}}, welcome to {{myCity}} </div>',
    scope: {
      myName: '@',
      myCity: '='
    },

    link: function ($scope, element, attrs) {
    
            element.bind('click', function () {
                element.html('You clicked me!');
            });
            element.bind('mouseenter', function () {
                element.css('background-color', 'yellow');
            });
            element.bind('mouseleave', function () {
                element.css('background-color', 'white');
            });
        }
  };
});
