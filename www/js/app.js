// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	
	.state('app', {
		url: "/app",
		abstract: true,
		templateUrl: "templates/menu.html",
		controller: 'AppCtrl'
	})
	
	.state('app.editorial', {
		url: "/editorial",
		views: {
			'menuContent': {
				templateUrl: "templates/editorial.html"
			}
		}
	})
	
	.state('app.find', {
		url: "/find",
		views: {
			'menuContent': {
				templateUrl: "templates/find.html"
			}
		}
	})
	
	.state('app.conquer', {
		url: "/conquer",
		views: {
			'menuContent': {
				templateUrl: "templates/conquer.html",
				controller: 'ConquerCtrl'
			}
		}
	})
	
	.state('app.stock', {
		url: "/stock",
		views: {
			'menuContent': {
				templateUrl: "templates/stock.html",
				controller: 'StockCtrl'
			}
		}
	})
	
	.state('app.single', {
		url: "/bottles/:bottleId",
		views: {
			'menuContent': {
				templateUrl: "templates/bottle.html",
				/*controller: 'PlaylistCtrl'*/
			}
		}
	})
	
	.state('app.profile', {
		url: "/profile",
		views: {
			'menuContent': {
				templateUrl: "templates/profile.html"
			}
		}
	});
	
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/editorial');
});
