angular.module('homeModule', []).
controller('HomeCtrl', ['$scope','GetEmployees','PostEmployees' ,'ExcelConverter' 
	, function($scope,GetEmployees,PostEmployees ,ExcelConverter ){
	$scope.showAdd = true;
	GetEmployees.query(function(data) {
	    $scope.employeeData = data;
	});
	$scope.hideList = false;
	$scope.exportToExcel= function(){
		ExcelConverter.jsonCsvConvertor($scope.employeeData, "Data", true);
	}
	$scope.editEmployeeData = function(employee, pos){
		$scope.editEmp = employee;
		$scope.editPosition = pos;
	}
	$scope.updateEmployeeData = function(employee, pos){
		$scope.employeeData[pos] = employee;
		$scope.editPosition = null;
	}
	$scope.saveNewEmplyee = function(){
		$scope.hideEmployeeData = false;
		$scope.employeeData.push($scope.newEmp);
		$scope.newEmp = [];
	}
	$scope.saveModData = function(){
		 PostEmployees.save($scope.employeeData,function(obj){
		 	alert(obj)
		 });
	}
}])
