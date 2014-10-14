'use strict';

angular.module('desktop')
    .factory('VehicleDataService', function($q, $http, usSpinnerService) {
        return {
            search: function(plate) {
                var deferred = $q.defer();
                usSpinnerService.spin('loading');

                $http({
                    method: 'get',
                    url: '/movilidad/vehiculos/' + plate
                }).
                success(function(data) {
                    deferred.resolve(data.consulta);
                }).error(function(error) {                
                    deferred.reject(error);
                }).finally(function() {
                    usSpinnerService.stop('loading');
                });

                return deferred.promise;
            }
        };
    });
