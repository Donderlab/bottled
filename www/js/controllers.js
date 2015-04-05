angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicSideMenuDelegate) {
	
	$scope.toggle = function() {
		console.log("toggle called");
		
		$ionicSideMenuDelegate.toggleRight(false);
	}
})

.controller('ConquerCtrl', function($scope) {
	$scope.list = [
		{ title: "Baker's", id: 1 },
		{ title: "Ben Nevis", id: 2 },
		{ title: "Black Maple Hill", id: 3 },
		{ title: "Black Nikka", id: 4 },
		{ title: "Blackadder", id: 5 },
		{ title: "Bunnahabhain", id: 6 }
	];
})

.controller('StockCtrl', function($scope) {
	$scope.list = [
		{ title: "Baker's", id: 1 },
		{ title: "Ben Nevis", id: 2 },
		{ title: "Black Maple Hill", id: 3 },
		{ title: "Black Nikka", id: 4 },
		{ title: "Blackadder", id: 5 },
		{ title: "Bunnahabhain", id: 6 }
	];
})

.controller('BottleCtrl', function($scope, $stateParams) {
});


/*---------------------
	For Later Use
 *---------------------	

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
*/



