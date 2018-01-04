/*
*  myApp
*/
;"use strict";

var myApp = angular.module('myApp', [
    'angular-loading-bar',
    'ui.router',
    'oc.lazyLoad',
    'ngSanitize',
    'ngAnimate',
    ]);

/* Run Block */
myApp
.run([
    '$rootScope',
    '$window',
    '$timeout',
    function ($rootScope, $window, $timeout) {
        /* 
        ## This url will be used if you are using REST-API
        ## This url is domain name of your api IF you are hosting REST on different domain or sub domain.
        ## This is for CORS 
        */
        // $rootScope.prefixurl = "http://www.example.com";

    }
])
  .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
    cfpLoadingBarProvider.spinnerTemplate = '<div><img src="img/ripple.svg" width="40px" alt="Loading..."></div>';
  }]);