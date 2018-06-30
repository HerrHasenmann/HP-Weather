app.config(["$mdIconProvider", function ($mdIconProvider) {
    $mdIconProvider
        .defaultIconSet('./assets/icons/mdi.svg')
}]);

// Disable aria warnings
app.config(["$mdAriaProvider", function ($mdAriaProvider) {
    $mdAriaProvider.disableWarnings();
}]);

// Fix for not working inputs on mobile devices
app.config(["$mdGestureProvider", function ($mdGestureProvider) {
    $mdGestureProvider.skipClickHijack();
}]);

// Set theme for app
app.config(["$mdThemingProvider", function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('indigo', {
            "default": "700"
        })
        .accentPalette('blue-grey', {
            "default": "500"
        })
        .warnPalette('deep-orange')
        .backgroundPalette('grey');

    $mdThemingProvider.theme('default-dark')
        .primaryPalette('indigo', {
            "default": "700"
        })
        .accentPalette('blue-grey', {
            "default": "500"
        })
        .warnPalette('deep-orange')
        .backgroundPalette('grey')
        .dark();

    $mdThemingProvider.setDefaultTheme('default-dark');
}]);