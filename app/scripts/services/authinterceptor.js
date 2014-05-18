'use strict';

angular.module('angelhackFrontendApp')
  .factory('authInterceptor', function () {
    return {
      request: function (config) {
        config.headers = config.headers || {};
        config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0MDA2OTEwNDksImlkIjoyfQ.GRIRwDQHwrVdoX3YQIToOhBtD-On0sGEfx1dJ4wDKnY';
        return config;
      }
    };
  });

angular.module('angelhackFrontendApp')
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
