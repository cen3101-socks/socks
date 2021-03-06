'use strict';

var users     = require('../../app/controllers/users.server.controller'),
	employees = require('../../app/controllers/employees.server.controller'),
	cats      = require('../../app/controllers/cats.server.controller');

module.exports = function(app) {

	var requireEmployee = employees.permissionLevel(users.EMPLOYEE);

	app.route('/cats').
		get(cats.list).
		post(requireEmployee, cats.create);

	app.route('/cats/:catId').
		get(cats.view).
		post(cats.update);

	app.route('/cats/:catId/events').
		post(requireEmployee, cats.addEvent);

	app.route('/cats/:catId/events/:eventId').
		put(requireEmployee, cats.editEvent).
		delete(requireEmployee, cats.deleteEvent);

	app.route('/cats/:catId/adoptions').
		post(requireEmployee, cats.adopt);

	app.route('/cats/:catId/adoptions/:adoptionId').
		put(requireEmployee, cats.unadopt);

	app.route('/cat-csv.csv').
		get(cats.generateCsv);

	app.param('catId', cats.catById);
	app.param('adoptionId', cats.adoptionById);
};
