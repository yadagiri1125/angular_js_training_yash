var app = angular.module('myApp',[]);

app.controller('ParentCtrl',
function ParentCtrl ($scope,$rootScope) {
  $scope.pGreet = function() {
      $scope.$broadcast('pGreet','parent');
  };
  $scope.$on('cGreet', function (event, data) {
    alert(data);
    console.log(data);
  });
});

app.controller('ChildCtrl', function SiblingCtrl ($scope,$rootScope) {
$scope.wish=false;
$scope.$on('pGreet', function (event, data) {
   $scope.wish=true;
   alert(data);
   console.log(data);
});

$scope.cGreet=function(){
  $scope.$emit('cGreet','child');
};

});