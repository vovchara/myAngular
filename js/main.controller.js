(function (){
    "use strict";
    function MainController ($scope, exFact, exService) {
        $scope.name = "user";
        $scope.show = true;
        $scope.data = [1,2,3,4,5,6,7];
        $scope.click = function () {
            console.log($scope.name);
        };

        $scope.cars = exService.getCars();
        $scope.addCar = function (newCar){
            if (exService.hasCar(newCar)){
                alert("Already exist!");
            }else{
                exService.addCar(newCar);
            }
        };

        $scope.languages = exFact.getLanguages();
        $scope.addLang = function (lang){
            if (exFact.hasLang(lang)){
                alert("Already know! ha-ha");
            }else{
                exFact.addLang(lang);
            }
        }
    }

    angular.module("app").controller("MainController", ["$scope", "exampleFactory", "exampleService", MainController]);
})();