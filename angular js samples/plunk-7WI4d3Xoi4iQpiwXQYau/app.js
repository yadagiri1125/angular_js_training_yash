var app = angular.module('pathApp', ['ngRoute']);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Book/Edit', {
    template: '<div>Edit</div>',
  })
  .when('/Book/Delete', {
    template: '<div>Delete</div>',
  })
  .when('/Book/Show', {
    template: '<div>Show</div>',
  })
  .when('/Book/Add', {
    template: '<div>Add</div>',
  })
  .when('/Book/Error', {
     template: '<div>Error Path</div>',
  })
  .otherwise({redirectTo: '/Book/Error'});

  
}]);

