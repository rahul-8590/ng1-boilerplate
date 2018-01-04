myApp
.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

            // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
            // $urlRouterProvider
            // .when('/dashboard', '/')
            // .otherwise('/');

            $stateProvider
            // -- ERROR PAGES --
            .state("error", {
                url: "/error",
                templateUrl: 'app/views/error.html'
            })

            // -- RESTRICTED --
            .state("restricted", {
                abstract: true,
                url: "",
                views: {
                    'main_header': {
                        templateUrl: 'app/core/header.html',
                        controller: 'main_headerCtrl'
                    },
                    'main_footer': {
                        templateUrl: 'app/core/footer.html',
                        controller: 'main_footerCtrl'
                    },
                    '': {
                        templateUrl: 'app/views/restricted.html'
                    }
                },
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            // 'lazy_selectizeJS',
                            ],{ serie: true });
                    }]
                }
            })


            // -- Home --
            .state("restricted.home", {
                url: "/",
                templateUrl: 'app/pages/index.php',
                controller: 'indexCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'app/pages/indexController.js'
                            ], {serie: true} );
                    }],
                    // test_data: function($http, $rootScope){
                    //     return $http({method: 'GET', url: 'http://test.com/api'})
                    //     .then(function (data) {
                    //         return data.data;
                    //     });
                    // }
                },
                data: {
                    pageTitle: 'Home'
                }
            })

            .state("restricted.view1", {
                url: "/view1",
                templateUrl: 'app/pages/view1.html',
                controller: 'view1Ctrl',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'app/pages/view1Controller.js'
                            ], {serie: true} );
                    }],
                    // test_data: function($http, $rootScope){
                    //     return $http({method: 'GET', url: 'http://test.com/api'})
                    //     .then(function (data) {
                    //         return data.data;
                    //     });
                    // }
                },
                data: {
                    pageTitle: 'View 1'
                }
            })


            .state("restricted.view2", {
                url: "/view2",
                templateUrl: 'app/pages/view2.html',
                controller: 'view2Ctrl',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'app/pages/view2Controller.js'
                            ], {serie: true} );
                    }],
                    // test_data: function($http, $rootScope){
                    //     return $http({method: 'GET', url: 'http://test.com/api'})
                    //     .then(function (data) {
                    //         return data.data;
                    //     });
                    // }
                },
                data: {
                    pageTitle: 'View 2'
                }
            })

        }]);