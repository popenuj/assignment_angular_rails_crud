Pinboard.controller('PinsCtrl', ['$scope', 'pins', 'pin', 'pinsService',
  function($scope, pins, pin, pinsService) {
    $scope.pins = pins;
    $scope.pin = pin;
    $scope.pinParams = {};
    $scope.errors = [];

    $scope.destroyPin = function(pin) {
      pinsService.destroy(pin);
    }

    $scope.createPin = function(pinParams) {
      // pinParams.user_id = $scope.currentUser.id;
      pinsService.create(pinParams)
        .then(function(response) {
          $scope.pinParams = {}
        }, function(response) {
          console.log(response)
          $scope.errors = response.data.errors
        })
    }
  }
])
