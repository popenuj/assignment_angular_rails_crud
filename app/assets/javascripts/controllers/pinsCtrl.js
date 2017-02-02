Pinboard.controller('PinsCtrl', ['$scope', 'pins', 'pin', 'pinsService',
  function($scope, pins, pin, pinsService) {
    $scope.pins = pins;
    $scope.pin = pin;

    $scope.destroyPin = function(pin) {
      pinsService.destroy(pin);
    }

    $scope.createPin = function() {
      // pinParams.user_id = $scope.currentUser.id;
      pinsService.create($scope.pinParams)
    }
  }
])
