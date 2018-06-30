app.component("theme", {
    templateUrl: "./components/color-sample/theme/themeTemplate.html",
    controller: [ThemeController],
    bindings: {
        theme: "<"
    }
});

function ThemeController() {

    var ctrl = this;

    setTimeout(function () {
        console.log(ctrl.theme);
    }, 500)

    var theme = {
        "name": "default",
        "colors": {
            "primary": {
                "name": "indigo",
                "hues": {"default": "700", "hue-1": "300", "hue-2": "800", "hue-3": "A100"}
            },
            "accent": {
                "name": "blue-grey",
                "hues": {"default": "500", "hue-1": "A100", "hue-2": "A400", "hue-3": "A700"}
            },
            "warn": {
                "name": "deep-orange",
                "hues": {"default": "500", "hue-1": "300", "hue-2": "800", "hue-3": "A100"}
            },
            "background": {
                "name": "grey",
                "hues": {"default": "50", "hue-1": "A100", "hue-2": "100", "hue-3": "300"}}
        },
        "isDark": false,
        "foregroundPalette": {
            "1": "rgba(0,0,0,0.87)",
            "2": "rgba(0,0,0,0.54)",
            "3": "rgba(0,0,0,0.38)",
            "4": "rgba(0,0,0,0.12)",
            "name": "dark"
        },
        "foregroundShadow": ""
    }
}