// Code goes here

function Ctrl($scope) {
  $scope.txt = '';
  $scope.names=[{name:'pavan', age:20},
                {name:'siva', age:30},
                {name:'raju', age:40},];
    
    $scope.$watch('names', function(newvalue, oldvalue){
        console.log(oldvalue + '-' + newvalue );
        //console.log($scope.userType);
    },true);
    
    $scope.PublishedState = {"Draft":1, "Review":2, "Published":3, "Revoked":4};
    


}
