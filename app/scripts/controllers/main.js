'use strict';

angular.module('angelhackFrontendApp')
  .controller('MainCtrl', function ($scope, Journal, Entry) {
    $scope.journals = Journal.query(function () {
      $scope.journals.forEach(function (journal) {
        journal.entries = Entry.query({journalID:journal.id}, function () {
          journal.entries.forEach(function (entry) {
            entry.created = new Date(entry.created);
            entry.updated = new Date(entry.updated);
            console.log(entry.created);
          });
        });
      });
    });
  });
