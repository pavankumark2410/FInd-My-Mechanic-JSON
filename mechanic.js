var myapp = angular.module('Mechanic', []);
      /*Dependency Injection*/
      myapp.controller('Mechanicctrl',function($scope,$http)
{
   $http.get('https://pavankumark2410.github.io/FInd-My-Mechanic-JSON/getMechanics.json')
   .success(function(response)
{
  $scope.names=response.mechanic;
  $scope.rowlimit=6;
}
);
});