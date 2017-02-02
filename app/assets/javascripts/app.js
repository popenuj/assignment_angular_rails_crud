var Pinboard = angular.module('Pinboard', ['ui.router', 'restangular', 'Devise']);

Pinboard.config(['RestangularProvider',
  function(RestangularProvider) {
    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');
  }]
)

Pinboard.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/pins");

    $stateProvider
      .state('index', {
        url: '/pins',
        templateUrl: 'templates/pins/index.html',
        controller: 'PinsCtrl',
        resolve: {
          pins: function(pinsService) {
            return pinsService.getPins();
          },
          pin: function() { return null }
        }
      })
      .state('show', {
        url: '/pins/:id',
        templateUrl: 'templates/pins/show.html',
        controller: 'PinsCtrl',
        resolve: {
          pins: function() { return null },
          pin: function(pinsService, $stateParams) {
            return pinsService.getPin($stateParams.id);
          }
        }
      })
  }
)
