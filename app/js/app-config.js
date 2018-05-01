app.config(function($mdIconProvider) {
    $mdIconProvider
        .defaultIconSet('./icons/mdi.svg')
});

// Disable aria warnings
app.config(function($mdAriaProvider) {
    $mdAriaProvider.disableWarnings();
});

//Fix for not working inputs on mobile devices
app.config(function ($mdGestureProvider) {
    $mdGestureProvider.skipClickHijack();
});

app.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('orange');
    });