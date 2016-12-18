/// <reference path="angular.min.js" />
var mainApp = angular.module("mainApp", []);
mainApp.controller("empController", function ($scope) {
    var employees = [
                   { name: "Ben", gender: "Male", salary: 55000 },
                   { name: "Leesha", gender: "Female", salary: 68000 },
                   { name: "Mark", gender: "Male", salary: 57000 },
                   { name: "Pam", gender: "Female", salary: 53000 },
                   { name: "Todd", gender: "Male", salary: 60000 }
    ];

    $scope.employees = employees;
    $scope.employeeView = "empTable.html";
});