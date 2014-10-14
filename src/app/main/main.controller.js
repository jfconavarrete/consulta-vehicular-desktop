'use strict';

angular.module('desktop')
  .controller('MainCtrl', function ($log, VehicleDataService) {

    this.search = function(plate) {
        VehicleDataService.search(plate).then(function(response) {
            $log.info(response);
        });        
    };
  });
