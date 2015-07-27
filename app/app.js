;(function(){
    angular
        .module('webmepro', [
            'ui.router',
            'webmepro.home'
        ])
        .config(WebmeoroCfg);

    function WebmeoroCfg ($urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/home');
    }
})();