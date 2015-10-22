'use strict';

app.factory('Project',['appHost', '$resource', function(appHost, $resource) {
    return $resource(appHost.url + 'projects',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}]);

app.factory('Task',['appHost', '$resource', function(appHost, $resource) {
    return $resource(appHost.url + 'tasks',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}]);

app.service('ProjectService',['$q', 'Project', 'Task', function($q, Project, Task) {
    var self = {
        'items': [],
        'tasks':[],
        'taskSelected': null,
        'isLoading': false,
        'loadProject': function() {
            self.isLoading = true;

            Project.query().$promise.then(function (response) {
                self.items = response;
                self.isLoading = false;
            });
        },
        'loadTasks': function(projectId) {
            self.isLoading = true;

            Task.query().$promise.then(function (response) {
               self.tasks = response;
               self.isLoading = false;
            });
        }
    };

    self.loadProject();

    return self;
}]);
