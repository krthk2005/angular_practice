app = angular.module('myApp', ['ngRoute','homeModule','app.services']);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
	$routeProvider.
      when('/', {
        templateUrl: 'partials/home-folder/home.html',
        controller: 'HomeCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });

      
  if(window.history && window.history.pushState){
     $locationProvider.html5Mode({
             enabled: true,
             requireBase: false
     });
	 }
}])
