var lab01 = angular.module("Lab01");
lab01.controller("LoginController",function($scope,$rootScope){
	$scope.show_loginscreen = true;
	$scope.error = false;
	$rootScope.$on("loggedout",function(){
		$scope.show_loginscreen = true;
		$scope.username = "";
		$scope.password = "";
	});
	$scope.login = function(){
		if($scope.username == "sam" && $scope.password == "sam12345"){
			$scope.error = false;
			$scope.show_loginscreen = false;
			$rootScope.$broadcast("loggedin",$scope.username);	
		}
		else{
			$scope.error = true;
		}
	}
});
lab01.controller("HomeController",function($scope,$rootScope){
	$scope.show_homescreen = false;
	$scope.$on("loggedin",function(e,value){
		$scope.show_homescreen = true;
		$scope.message = "Welcome " + value;
	});
	$scope.logout = function(){
		$scope.show_homescreen = false;
		$rootScope.$broadcast("loggedout");
	}
});