var app = angular.module('campus360', []);

app.controller("dashboardcontroller", function ($scope) {


    $scope.collegename = "FISAT";
    $scope.totalstudents = 1200;
    $scope.totalfaculty = 1500;
      $scope.showstudents = false;
        $scope.showDashboard = true;
        $scope.fees = 25000;
        $scope.today = new Date();
        $scope.departments = [

            "CSE", "ECE", "EEE", "MECH", "CIVIL"
        ];

        $scope.selectedDepartment = "CSE";
        

    console.log("dashboard controller is loaded");

    $scope.students = [
         "aravind", "ashwin", "athul", "athira", "ayush", "balu"
    ];

    $scope.addstudents = function () {

        $scope.totalstudents++;
      
    };

    $scope.isReadOnly = true;
        $scope.toogleReadOnly = function (){
            
            $scope.isReadOnly = !$scope.isReadOnly;
        };

        $scope.isDisabled = true;
        $scope.allowAdmission = function(){

            $scope.isDisabled = false;
        };

});