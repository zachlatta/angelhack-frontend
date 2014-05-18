'use strict';

//var apiBase = 'http://plato.hackedu.us:3000';
var apiBase = 'http://localhost:3000';

console.log(apiBase);

angular
  .module('angelhackFrontendApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'nvd3ChartDirectives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
