(function () {
    "use strict";
    var app = angular.module("app");
    app.factory("exampleFactory", function () {
        console.log("factory init");
        var languages = ["AS3", "C#", "JAVA", "JS"];
        return {
            addLang : function (lang){languages.push(lang)},
            getLanguages : function (){return languages},
            hasLang : function (lang){return languages.indexOf(lang) > -1}
        }
    });

    app.service("exampleService", function () {
        var listOfCars = ["honda", "toyota", "bmw", "nissan", "mazda"];
        this.addCar = function (carName) {
            listOfCars.push(carName);
        };
        this.getCars = function (){
            return listOfCars;
        };
        this.hasCar = function(carName){
            return listOfCars.indexOf(carName) > -1;
        }
    });
})();