(function () {
    var app = angular.module('displayDateTime', []);
    app.constant('dateConfig', {dateTime: new Date()});
    app.controller('dateTimeController', ['$scope', 'dateConfig', function ($scope, dateConfig) {
        $scope.currDateTime = dateConfig.dateTime;
    }]);
})();