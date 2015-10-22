
app.controller('TaskCrtl',['$scope', 'ProjectService', function($scope, ProjectService) {
	$scope.project = ProjectService;
	$scope.project.loadTasks();
}]);