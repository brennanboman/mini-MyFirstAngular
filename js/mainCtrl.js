angular.module('friendsList').controller('mainCtrl', function ($scope) {
  $scope.friends = ['Colt', 'Brett', 'Ryan', 'Dillon', 'Kris', 'Lorenzo'];


  $scope.addFriend = function() {
    $scope.friends.push($scope.newFriend);
  };


});
