var app = angular.module('campus360', []);

app.controller('dashboardController', function($scope) {

    $scope.collegename="Fisat";
    $scope.totalStudents=1200;
    $scope.totalFaculty=85;
    $scope.students = [
        "John Doe",
        "Jane Smith",
        "Michael Johnson",
        "Emily Davis"
    ];  

    $scope.newStudents = 0;
    $scope.addStudents = function() {

    $scope.totalStudents++;
}

    console.log("Dashboard Controller is loaded");
});