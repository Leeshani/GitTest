/// <reference path="angular.min.js" />


var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope, $http) {

            $http.get("http://localhost:16683/api/Employee")
                 .then(function (response) {
                     $scope.employees = response.data;
                 });
        });