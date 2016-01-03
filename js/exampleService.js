(function () {
    "use strict";
    var app = angular.module("app");

    app.factory("exampleFactory", function () {
        console.log("factory init");
        var languages = ["AS3", "C#", "JAVA", "JS"];
        return {
            addLang: function (lang) {
                if (languages.indexOf(lang) == -1) {
                    languages.push(lang);
                    return true;
                } else {
                    return false;
                }
            },
            getLanguages: function () {
                return languages
            }
        }
    });

    app.service("exampleService", function () {
        var listOfCars = ["honda", "toyota", "bmw", "nissan", "mazda"];
        this.addCar = function (carName) {
            if (listOfCars.indexOf(carName) == -1) {
                listOfCars.push(carName);
                return true;
            } else {
                return false;
            }

        };
        this.getCars = function () {
            return listOfCars;
        };
    });
})();