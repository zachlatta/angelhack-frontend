'use strict';

var apiBase;

angular.module('angelhackFrontendApp')
  .factory('Journal', function ($resource) {
    return $resource(apiBase + '/journals/:id', {}, {
      query: { method: 'GET', params: { id: '' }, isArray: true }
    });
  });
