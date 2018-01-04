/* ocLazyLoad config */

myApp
    .config([
        '$ocLazyLoadProvider',
        function($ocLazyLoadProvider) {
            $ocLazyLoadProvider.config({
                debug: false,
                events: false,
                modules: [
                    {
                        name: 'lazy_pagination',
                        files: [
                            'assets/js/dirPagination.js'
                        ],
                        serie: true
                    },
                ]
            })
        }
    ]);