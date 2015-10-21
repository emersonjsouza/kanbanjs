/* global app */
'use strict';

app.factory('Project', function(appHost, $resource) {
	return $resource(appHost.url + 'project',{id:'@_id'},{
        update: {
            method: 'PUT'
      	}
	});
});

app.service('ProjectService', function($q, Project) {

	var self = {
		'items': [],
		'isLoading': false,
        'loadProject': function(veiculoId) {
            var d = $q.defer();

            Project.query().$promise.then(function (response) {
               console.log(response);
               self.items = d.resolve(response);
            });

            return d.promise;
        }
	};

    self.loadProject();

    return self;
});

