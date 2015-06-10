var app = angular.module('myApp', []);

// Factory
app.factory('testFactory', function(){
    /*return {
        sayHello: function(text){
            return "Factory says \"Hello " + text + "\"";
        }  
    };*/            
    
    var factory = {}; 

    factory.sayHello = function(text) {
            return "Factory says \"Hello " + text + "\"";
    };

    return factory;
});

// AngularJS Controller that uses the factory
app.controller('HelloCtrl', function($scope, testFactory)
{
    $scope.fromFactory = testFactory.sayHello("World");
});