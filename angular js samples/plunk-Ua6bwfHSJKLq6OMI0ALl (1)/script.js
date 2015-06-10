
var app = angular.module('myapp', []);

app.controller('MainCtrl', function($scope) {
  $scope.colors=['red', 'blue', 'green', 'yellow']
});

app.directive('helloWorld', function() {
  return {
      scope:{
        color:'=' 
      },
      restrict: 'AE',
      replace: 'true',
      template: '<p style="background-color:{{color}}">Hello World!!</p>',
      link: function(scope,elem,attrs){
        elem.bind('click', function(){
          elem.css('background-color','white');
         
        });
        elem.bind('mouseover',function(){
          elem.css('cursor','pointer');
        });
      }
  };
});
