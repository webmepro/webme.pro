;
(function(){
    'use strict';
    angular
        .module('webmepro.home', [])
        .config(WebmeproHomeConfig);


    function WebmeproHomeConfig($stateProvider){
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/home/home.html'
            })

    }
})();
