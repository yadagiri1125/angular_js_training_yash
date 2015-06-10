var myApp = angular.module('myApp', []);

//Service style, probably the simplest one
myApp.service('helloWorldFromService', function() {
    this.sayHello = function() {
        return "Hello, World!";
    };
});

//Factory style, more involved but more sophisticated
myApp.factory('helloWorldFromFactory', function() {
    return {
        sayHello: function() {
            return "Hello, World!";
        }
    };
});

//Provider style, full blown, configurable version
myApp.provider('helloWorld', function() {
    // In the provider function, you cannot inject any
    // service or factory. This can only be done at the
    // "$get" method.

    this.name = 'Default';

    this.$get = function() {
        var name = this.name;
        return {
            sayHello: function() {
                return "Hello, " + name + "!";
            }
        };
    };

    this.setName = function(name) {
        this.name = name;
    };
});

//Hey, we can configure a provider!
myApp.config(function(helloWorldProvider){
    helloWorldProvider.setName('World');
});


myApp.controller('MyCtrl', function($scope, helloWorld, helloWorldFromFactory, helloWorldFromService) {

    $scope.hellos = [
        helloWorld.sayHello(),
        helloWorldFromFactory.sayHello(),
        helloWorldFromService.sayHello()];
});