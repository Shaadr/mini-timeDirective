angular.module('miniTime')
.directive('showTime', function(){
  return{
    restrict: 'E',
    template: '<div> The current time is {{currentTime}} </div>',
    link: function(scope, element, attr){
      scope.countTime()
    },
    countTime: '&'
  }
})
