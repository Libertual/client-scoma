angular.module('MyApp')
  .factory('Account', ['$http', 'SatellizerConfig', function($http, config) {
    return {
      getProfile: function() {
        return $http.get(config.baseUrl + '/api/me');
      },
      updateProfile: function(profileData) {
        return $http.put(config.baseUrl + '/api/me', profileData);
      },
      updatePassword: function(profileData) {
        return $http.put(config.baseUrl + '/api/pass', profileData);
      }
    };
  }]);
