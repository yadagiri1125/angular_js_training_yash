// Code goes here

var app = angular.module('myDirec', []);


app.directive('myDirective', function() {
  return {
    restrict: 'EACM', 

    templateUrl: 'info.html',
    scope: {
      name: '@',
      city: '@'
    },

    controller: function($scope){
      //alert('controller');
    },
    link:function(){
      //alert('link');
    }
    
  };
});
