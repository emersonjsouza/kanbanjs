
module.exports = function(app) {

	var project = app.controllers.project;
	var task = app.controllers.task;

	app.get('/api/projects', project.list);
	app.get('/api/projects/:id',project.get);
	app.delete('/api/projects:id', project.remove);

	app.get('/api/tasks', task.list);
}