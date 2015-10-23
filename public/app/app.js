'use strict';

var app = angular.module('kanbanjs',['ui.router', 'ngResource', 'ngMaterial', 'dndLists']);


app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
        .state('project', {name: 'project', url: '/home', templateUrl: 'templates/main.html', controller: 'ProjectCrtl'})
        .state('tasks', {name: 'tasks', url: '/tasks', templateUrl: 'templates/tasks.html', controller: 'TaskCrtl'})

    $urlRouterProvider.otherwise('/home');
});


