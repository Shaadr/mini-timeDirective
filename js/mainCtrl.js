angular.module('miniTime')
.controller('mainCtrl', function($scope, $interval){

$scope.name = 'Mike'


$scope.countTime = function() {
  $interval(function() {
    $scope.currentTime = moment().format("HH-DD-YYYY HH:mm:ss")
  }, 1000)
}



})
