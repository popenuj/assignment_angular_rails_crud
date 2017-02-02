Pinboard.factory('pinsService', ['Restangular',
  function(Restangular) {

    var getPins = function() {
      return Restangular.all('pins').getList().$object
    }

    var getPin = function(id) {
      return Restangular.one('pins', id).get().$object;
    }

    return {
      getPins: getPins,
      getPin: getPin
    }

  }
])
