Pinboard.controller('UsersCtrl', ['$scope', 'Auth',
  function($scope, Auth) {

    Auth.currentUser()
      .then(function(user) {
        $scope.currentUser = user;
        console.log(user);
      }, function(response) {
        console.error(response);
      });

    $scope.userLoggedIn = function() {
      return !!$scope.currentUser
    }

    $scope.belongsToCurrentUser = function(pin) {
      if ( $scope.userLoggedIn() ) {
        return pin.user_id === $scope.currentUser.id
      }
    }

  }]
)
