'use strict';

//Setting up route
angular.module('stats').config(['$stateProvider',
	function($stateProvider) {
		console.log("a");
		$stateProvider.
		state('listStats', {
			url: '/stats',
			templateUrl: 'modules/stats/views/list-stats.client.view.html'
		}).
		state('mapStats', {
			url: '/stats/map',
			templateUrl: 'modules/stats/views/stats-map.client.view.html'
		});
	}
]);