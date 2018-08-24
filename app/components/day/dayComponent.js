/**
 * Created by Ich on 31.07.2018.
 */
app.component("day", {
    templateUrl: "./components/day/dayTemplate.html",
    controller: ["$rootScope", "WeatherService", DayController]
});

function DayController($rootScope, WeatherService) {

    var ctrl = this;

    ctrl.dayOfWeek = moment().format("dd.");

    ctrl.weather = null;

    ctrl.$onInit = function () {
        WeatherService.getCurrentWeather().then(function (currentWeather) {

            $rootScope.safeApply(function () {
                ctrl.weather = currentWeather;
                console.log(currentWeather);
            })
        })
    }
}