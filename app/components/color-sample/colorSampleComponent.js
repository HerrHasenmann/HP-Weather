app.component("colorSample", {
    templateUrl: "./components/color-sample/colorSampleTemplate.html",
    controller: ["$mdTheming", ColorSampleController]
});

function ColorSampleController($mdTheming){

    console.log($mdTheming.THEMES)

    //TODO display default theme colors
}