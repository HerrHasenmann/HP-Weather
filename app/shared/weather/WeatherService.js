/**
 * Created by Ich on 31.07.2018.
 */
app.service("WeatherService", ["$http", "$resource", "LocalStorageService", "OPEN_WEATHER_MAP_API_KEY", function ($http, $resource, LocalStorageService, OPEN_WEATHER_MAP_API_KEY) {

    var serv = this;
    const WEATHER_REFRESH_PERIOD_IN_HOURS = 1;

    var currentWeatherResource = $resource('https://api.openweathermap.org/data/2.5/weather?id=:id&units=metric&appid=' + OPEN_WEATHER_MAP_API_KEY);

    serv.getCurrentWeather = function () {

        var id = "2950159";

        return getCurrentWeather(id)
    };

    function getCurrentWeather(id) {

        var key = "currentWeather." + id;

        return new Promise(function (resolve, reject) {
            if (LocalStorageService.checkItem(key) && !isTooOld(LocalStorageService.getItem(key).requestedMoment)) {

                resolve(LocalStorageService.getItem(key));
            } else {

                var currentWeather = currentWeatherResource.get({id: "2950159"});
                currentWeather.$promise.then(function () {
                    currentWeather.requestedMoment = moment();
                    LocalStorageService.setItem(key, currentWeather);
                    resolve(currentWeather);
                });
            }
        });
    }

    function isTooOld(dateString) {
        var currentMoment = moment();
        var requestedMoment = moment(dateString);

        if(requestedMoment.add(WEATHER_REFRESH_PERIOD_IN_HOURS, "hours").isBefore(currentMoment)){
            return true;
        }
    }
}]);