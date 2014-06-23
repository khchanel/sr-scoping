'use strict';

/**
 * @ngdoc service
 * @name srScopingApp.memoryService
 * @description
 * # MemoryService
 * Service in the srScopingApp.
 */
(function () {

    var sorCodes = [
        {'id': 1,  'code': 'KIT1234', 'description': 'Repair kitchen', 'price': 444.5},
        {'id': 2,  'code': 'LIV6668', 'description': 'Living room carpet', 'price': 1200},
        {'id': 1,  'code': 'KIT1234', 'description': 'Repair kitchen', 'price': 444.5},
        {'id': 2,  'code': 'LIV6668', 'description': 'Living room carpet', 'price': 1200},
        {'id': 1,  'code': 'KIT1234', 'description': 'Repair kitchen', 'price': 444.5},
        {'id': 2,  'code': 'LIV6668', 'description': 'Living room carpet', 'price': 1200},
        {'id': 1,  'code': 'KIT1234', 'description': 'Repair kitchen', 'price': 444.5},
        {'id': 2,  'code': 'LIV6668', 'description': 'Living room carpet', 'price': 1200},
        {'id': 1,  'code': 'KIT1234', 'description': 'Repair kitchen', 'price': 444.5},
        {'id': 2,  'code': 'LIV6668', 'description': 'Living room carpet', 'price': 1200},
        {'id': 1,  'code': 'KIT1234', 'description': 'Repair kitchen', 'price': 444.5},
        {'id': 2,  'code': 'LIV6668', 'description': 'Living room carpet', 'price': 1200},
        {'id': 1,  'code': 'KIT1234', 'description': 'Repair kitchen', 'price': 444.5},
        {'id': 2,  'code': 'LIV6668', 'description': 'Living room carpet', 'price': 1200},
        {'id': 1,  'code': 'KIT1234', 'description': 'Repair kitchen', 'price': 444.5},
        {'id': 2,  'code': 'LIV6668', 'description': 'Living room carpet', 'price': 1200},
        {'id': 1,  'code': 'KIT1234', 'description': 'Repair kitchen', 'price': 444.5},
        {'id': 2,  'code': 'LIV6668', 'description': 'Living room carpet', 'price': 1200},
        {'id': 1,  'code': 'KIT1234', 'description': 'Repair kitchen', 'price': 444.5},
        {'id': 2,  'code': 'LIV6668', 'description': 'Living room carpet', 'price': 1200},
        {'id': 1,  'code': 'KIT1234', 'description': 'Repair kitchen', 'price': 444.5},
        {'id': 2,  'code': 'LIV6668', 'description': 'Living room carpet', 'price': 1200},
        {'id': 1,  'code': 'KIT1234', 'description': 'Repair kitchen', 'price': 444.5},
        {'id': 2,  'code': 'LIV6668', 'description': 'Living room carpet', 'price': 1200},
        {'id': 1,  'code': 'KIT1234', 'description': 'Repair kitchen', 'price': 444.5},
        {'id': 2,  'code': 'LIV6668', 'description': 'Living room carpet', 'price': 1200},
        {'id': 1,  'code': 'KIT1234', 'description': 'Repair kitchen', 'price': 444.5},
        {'id': 2,  'code': 'LIV6668', 'description': 'Living room carpet', 'price': 1200},
        {'id': 1,  'code': 'KIT1234', 'description': 'Repair kitchen', 'price': 444.5},
        {'id': 2,  'code': 'LIV6668', 'description': 'Living room carpet', 'price': 1200}
    ],


    findBySor = function (sor) {
        var results = sorCodes.filter(function (element) {
            return sor === element.code;
        });
        return results;
    };


    angular.module('srScopingApp.memoryService', [])
    .factory('Sor', [
        function () {
            return {
                query: function () {
                    return sorCodes;
                },
                get: function (sor) {
                    return findBySor(sor);
                }
            };
        }]);
}());