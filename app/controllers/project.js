
var _ = require('underscore');

module.exports = function(app) {

	var projects = app.models.project;

	return {
		add: function(item) {

		},

		remove:function(req, res) {
			var item = _.find(projects, function(item) {
				return item._id == req.params.id;
			});

			if (item) {
				projects.splice(item, 1);
				return res.status(200).json(true);
			}

			return res.status(404).json(false);
		},

		get:function(req, res) {
			var item = _.find(projects, function(item) {
				return item._id == req.params.id;
			});

			return res.status(200).json(item);
		},

		list: function(req, res) {
			return res.status(200).json(projects);
		}
	};
}