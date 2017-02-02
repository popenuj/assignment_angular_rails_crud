var Pinboard = angular.module('Pinboard', ['ui.router', 'restangular']);

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
          }
        }
      }
    )
  }
)
