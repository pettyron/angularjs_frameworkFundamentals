app.controller('labController', ['$scope', 'registration', function ($scope, registration) {
    $scope.reset = reset;
    $scope.submit = submit;

    reset();

    function reset() {
        $scope.model = {};
    }

    function submit(model) {
        registration.submit(model).$promise
            .then(function (res) {
                alert('success');
            }, function (res) {
                alert('error');
            });
        // alert('Submitted\n' + JSON.stringify({ model }, null, ' '));
    }
}]);