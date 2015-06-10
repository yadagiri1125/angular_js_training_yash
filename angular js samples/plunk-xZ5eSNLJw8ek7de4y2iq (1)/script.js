 var app = angular.module('app', []);
           app.controller('UserCtrl', function ($scope) {

              $scope.Message = "New User Registration";
              $scope.selectedmonth = "";

              $scope.MonthNames = [ { no: 1, name: "Jan" }, 
                                    { no: 2, name: "Feb" }, 
                                    { no: 3, name: "Mar" }, 
                                    { no: 4, name: "Apr" }, 
                                    { no: 5, name: "May" }, 
                                    { no: 6, name: "Jun" }, 
                                    { no: 7, name: "Jul" }, 
                                    { no: 8, name: "Aug" }, 
                                    { no: 9, name: "Sep" }, 
                                    { no: 10, name: "Oct" }, 
                                    { no: 11, name: "Nov" }, 
                                    {no:12, name:"Dec"}];
                                    
              $scope.Genders = ["Male", "Female", "Other"];

              $scope.countries = [{ id: 1, name: "India" },  
                                  { id: 2, name: "Australia" }, 
                                  { id: 3, name: "USA" } ];
                                  
              $scope.cities = [ { cid: 1, id: 1, name: "New Delhi" }, 
                                { cid: 1, id: 2, name: "Hyderabad" }, 
                                { cid: 1, id: 3, name: "Kolkata" }, 
                                { cid: 1, id: 4, name: "Mumbai" }, 
                                { cid: 1, id: 3, name: "Chennai" }, 
                                { cid: 2, id: 11, name: "Melbourne" }, 
                                { cid: 2, id: 12, name: "Sydney" }, 
                                { cid: 3, id: 21, name: "New York" }, 
                                { cid: 3, id: 22, name: "California" }, 
                                { cid: 3, id: 23, name: "Texas" }];
            
              $scope.Save = function (user) {
                    alert( "Congratulations " + user.name + ", You are successfully Registered.")
              }

              $scope.Reset = function ()  {
                  $scope.user = {};
              }
          });