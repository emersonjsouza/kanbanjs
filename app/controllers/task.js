
var _ = require('underscore');

module.exports = function(app) {

	var projects = app.models.project;

	return {
		list: function(req, res) {
			var source = [
					{type: 'Analysis', tasks: [{label: "item 1"}, {label: "item 2"}]},
					{type: 'Design', tasks: []},
					{type: 'Development', tasks: []},
					{type: 'Test', tasks:[]},
					{type: 'Release', tasks:[]},
				];

			return res.status(200).json(source);
		}
	};
}