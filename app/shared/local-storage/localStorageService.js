/**
 * Created by Ich on 01.08.2018.
 */
app.service("LocalStorageService", ["$window", function ($window) {

    var serv = this;
    var storage = $window.localStorage;

    /*
    * Checks if an item exists for the given key.
    */
    serv.checkItem = function (key) {
        if(storage.getItem(key)){
            return true;
        }
    };

    /*
    * Return an item for the given key. Second parameter defaultItem is optional
    * and can be used to set a default if no item is found for the key.
    */
    serv.getItem = function (key, defaultItem) {
        if(serv.checkItem(key)){
            return JSON.parse(storage.getItem(key));
        } else if (defaultItem) {
            serv.setItem(key, defaultItem);
            return defaultItem;
        }
    };

    /*
    * Saves the given item with the given key in the local storage.
    */
    serv.setItem = function (key, item) {
        storage.setItem(key, JSON.stringify(item));
    }
}]);