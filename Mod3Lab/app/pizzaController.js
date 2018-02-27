app.controller('pizzaController', [
    '$scope',
    function ($scope) {
        $scope.model = {
            title: 'Pizza Builder',
            availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers'],
            toppings: []
        };
        console.log('model.toppings length before topping added is: ' + ($scope.model.toppings.length));
        $scope.addTopping = function (topping) {
            $scope.model.toppings.push(topping);
            $scope.model.search = null;
            // console.log('The new topping index is: ' + ($scope.model.toppings.indexOf(topping)));
            // console.log('model.toppings length after add is: ' + ($scope.model.toppings.length));
        }
    }
]);