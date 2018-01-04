/*
 *  myApp
 *  controller
 */

 angular
 .module('myApp')
 .controller('mainCtrl', [
    '$scope',
    '$rootScope',
    function ($scope, $rootScope) {
        // console.log("app init");
    }
    ])
 .controller('main_headerCtrl', [
    '$scope',
    '$rootScope',
    '$timeout',
    function ($scope, $rootScope, $timeout) {

        // This is header Controller

        $timeout(function() {
            // init materialize
            $.material.init();
        },1000);

        
    }])

 .controller('main_footerCtrl', [
    '$scope',
    function ($scope) {

        // This is footer Controller
        
    }]);
