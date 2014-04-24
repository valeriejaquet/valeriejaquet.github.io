'use strict';

var portfolioApp = angular.module('portfolioApp', []);

portfolioApp.controller('projectListCtrl', function($scope) {
  $scope.projects = [
    {
        'name': 'gstar',
        'title': 'Working with Direct Client – G-Star Raw',
        'thumbnail': './media/Gstar/image001.png',
        'images': [],
        'description': ''
    },
    {
        'name': 'gocatch',
        'title': 'Working with Direct Client – GoCatch',
        'thumbnail': './media/GoCatch/image.png',
        'images': [],
        'description': ''
    },
  ];
});