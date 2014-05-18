'use strict';

angular.module('angelhackFrontendApp')
  .factory('authInterceptor', function () {
    return {
      request: function (config) {
        config.headers = config.headers || {};
        config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0MDA2OTk2ODUsImlkIjozfQ.xEjsbi-MJ7jk3fB82rwXDtiAmtP0qIEfc7zKTUgP3ng';
        return config;
      }
    };
  });

angular.module('angelhackFrontendApp')
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
