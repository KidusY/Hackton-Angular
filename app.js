const bookFinder = angular.module('bookFinder', ['ui.router']);
bookFinder.controller('mainCtrl', function () {
//main controller
})
//router config
bookFinder.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    //home route
    $stateProvider.state('home', {
        url: '/',
        template: '<search></search>'
    })
    //map route
        .state('map', {
            url: '/map',
            template: '<maps></maps>'
        })

})