(function () {
    "use strict";
    function MainController($scope, exFact, exService) {
        $scope.name = "user";
        $scope.show = true;
        $scope.data = [1, 2, 3, 4, 5, 6, 7];
        $scope.click = function () {
            console.log($scope.name);
        };

        $scope.cars = exService.getCars();
        $scope.addCar = function (newCar) {
            var successAdded = exService.addCar(newCar);
            if (!successAdded) {
                alert("Already exist!");
            }
        };
        $scope.removeCar = function (car) {
            exService.removeCar(car);
        };

        $scope.languages = exFact.getLanguages();
        $scope.addLang = function (lang) {
            var successAdded = exFact.addLang(lang);
            if (!successAdded) {
                alert("Already know! ha-ha");
            }
        };
        $scope.removeLang = function (lang) {
            exFact.removeLang(lang);
        };
    }

    angular.module("app").controller("MainController", ["$scope", "exampleFactory", "exampleService", MainController]);
})();