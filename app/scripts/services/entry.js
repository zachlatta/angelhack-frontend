'use strict';

var apiBase;

angular.module('angelhackFrontendApp')
  .factory('Entry', function ($resource) {
    return $resource(apiBase + '/journals/:journalID/entries', {journalID:'@journalID'}, {
      query: { method: 'GET', params: { journalID:'@journalID' }, isArray: true }
    });
  });
