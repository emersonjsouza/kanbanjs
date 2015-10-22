'use strict';

app.factory('Project',['appHost', '$resource', function(appHost, $resource) {
    return $resource(appHost.url + 'projects',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}]);


app.service('ProjectService',['$q', 'Project', function($q, Project) {
    var self = {
        'items': [],
        'isLoading': false,
        'loadProject': function() {
            var d = $q.defer();

            Project.query().$promise.then(function (response) {
               self.items = d.resolve(response);
            });

            return d.promise;
        }
    };

    self.loadProject();

    return self;
}]);
