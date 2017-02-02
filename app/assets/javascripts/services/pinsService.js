Pinboard.factory('pinsService', ['Restangular',
  function(Restangular) {

    _pins = [];

    var getPins = function() {
      return Restangular.all('pins').getList()
        .then(function(response){
          angular.copy(response, _pins);
          console.log(_pins);
          return _pins;
        })
    }

    var getPin = function(id) {
      return Restangular.one('pins', id).get().$object;
    }

    var destroy = function(pin) {
      return pin.remove()
        .then(function(response) {
          getPins();
          return response;
        });
    }

    var create = function(params) {
      var pin = {pin: params}
      return Restangular.all('pins').post(pin)
        .then(function() {
          getPins();
        })
    }

    return {
      getPins: getPins,
      getPin: getPin,
      destroy: destroy,
      create: create
    }

  }
])
