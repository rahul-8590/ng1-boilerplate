/*
*  myApp AngularJS
*  directives
*/
;'use strict';

myApp
    // page title
    .directive('pageTitle', [
        '$rootScope',
        '$timeout',
        function($rootScope, $timeout) {
            return {
                restrict: 'A',
                link: function() {
                    var listener = function(event, toState) {
                        var default_title = 'SITE TITLE';
                        $timeout(function() {
                            $rootScope.page_title = (toState.data && toState.data.pageTitle)
                            ? default_title + ' - ' + toState.data.pageTitle : default_title;
                        });
                    };
                    $rootScope.$on('$stateChangeSuccess', listener);
                }
            }
        }
        ]);