// Code goes here

var app=angular.module('empApp',['ngRoute']);


app.controller('MainCtrl', function($scope){
  
  $scope.employees= [{id:1, name:'Ram', city:'Tanuku', state:'AP', country:'India'},
                     {id:2, name:'Gopal',  city:'Amalapuram', state:'AP', country:'India'},
                     {id:3, name:'Varma',  city:'Vizag', state:'AP', country:'India'},
                     {id:4, name:'Raju',  city:'Hyderabad', state:'TS', country:'India'},
                     {id:5, name:'Sandeep', city:'Bothell', state:'WA', country:'USA'},
                     {id:6, name:'Pavan',  city:'Hyderabad', state:'TS', country:'India'},
                     {id:7, name:'Bala',  city:'Guntur', state:'AP', country:'India'},
                     {id:8, name:'Rangababu', city:'Bhimavaram', state:'AP', country:'India'},
                     ];
                     
  $scope.rowSelect=function(index){
   $scope.selectedRow=index; 
   $scope.emp=$scope.employees[$scope.selectedRow];
  };
  
 
});

app.controller('ViewCtrl', function($scope, $routeParams){
  $scope.emp=angular.fromJson($routeParams.emp);
});


app.config(function($routeProvider) {
		$routeProvider
			// route for the home page
			.when('/list', {
				templateUrl : 'pages/list.html',
				controller  : 'MainCtrl'
			})

			// route for the about page
			.when('/view/:emp', {
				templateUrl : 'pages/view.html',
				controller  : 'ViewCtrl'
			
			})

		  .otherwise({
            redirectTo: '/list'
      });

	});