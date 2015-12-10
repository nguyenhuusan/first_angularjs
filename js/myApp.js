var app = angular.module('myApp', ['ngResource']);
app.controller('myController', function($scope, $resource) {
    $scope.products =
        [{category: "Mobile", id: "1001", name:"iPhone 5S"},
        {category: "Headphone", id: "1002", name:"Sony MDR-XD200"},
        {category: "Home Audio", id: "1003", name:"Bose Wave II"}];
    //co//nsole.log("aaa1")
    //var ProductService= $resource('http://localhost:18080/JSONRESTfulServices/rest/products/:idx',{idx: "@idx"});
    //console.log("aaa")
    //$scope.products = ProductService.get();

    $scope.onAdd = function() {
        $scope.submitted = true;
        console.log($scope.myForm.$invalid);
        if (!$scope.myForm.$invalid) {
            $scope.products.push({category: $scope.category, id: $scope.id, name: $scope.name});
            $scope.category = $scope.id = $scope.name = "";
            $scope.submitted = false;
        }
    };

    $scope.onDel = function() {
        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].checked) {
                $scope.products.splice(i--, 1);
            }
        }
    };
});
