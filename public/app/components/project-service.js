'use strict';

app.factory('Project',['appHost', '$resource', function(appHost, $resource) {
    return $resource(appHost.url + 'projects',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}]);

app.factory('Task',['appHost', '$resource', function(appHost, $resource) {
    return $resource(appHost.url + 'task',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}]);

app.service('ProjectService',['$q', 'Project', 'Task', function($q, Project, Task) {
    var self = {
        'items': [],
        'tasks':[],
        'isLoading': false,
        'loadProject': function() {
            self.isLoading = true;

            Project.query().$promise.then(function (response) {
                self.items = response;
                self.isLoading = true;
            });
        },
        'loadTasks': function(projectId) {
            self.isLoading = true;

            Task.query({id: projectId}).$promise.then(function (response) {
               self.tasks = response;
               self.isLoading = false;
            });
        }
    };

    self.loadProject();

    return self;
}]);
