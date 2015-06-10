// Code goes here

var app=angular.module('myApp',[]);

app.controller('MainCtrl', function($scope){
  
  $scope.cities=['Hyderabad', 'Chennai', 'Delhi', 'Guntur', 'Jaipur'];
  
  $scope.employees= [{name:'John', age:25, gender:'boy'},
                     {name:'Jessie', age:30, gender:'girl'},
                     {name:'Johanna', age:28, gender:'girl'},
                     {name:'Joy', age:15, gender:'girl'},
                     {name:'Mary', age:28, gender:'girl'},
                     {name:'Peter', age:95, gender:'boy'},
                     {name:'Sebastian', age:50, gender:'boy'},
                     {name:'Erika', age:27, gender:'girl'},
                     {name:'Patrick', age:40, gender:'boy'},
                     {name:'Samantha', age:60, gender:'girl'}];
  
  
  $scope.fruits = ['apple', 'orange', 'pear', 'naartjie'];
  $scope.checkedFruits = [];
  
  $scope.toggleCheck = function (fruit) {

      if ($scope.checkedFruits.indexOf(fruit) === -1) {
          $scope.checkedFruits.push(fruit);
      } else {
          $scope.checkedFruits.splice($scope.checkedFruits.indexOf(fruit), 1);
      }
  };
  
  
});