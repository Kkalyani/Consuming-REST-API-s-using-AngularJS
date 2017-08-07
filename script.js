(function(){
   var app = angular.module('github', []);
   app.controller("maincntl",['$scope', '$http', function($scope, $http){
     $scope.search = function(username){
        $http.get('https://api.github.com/users/' + username).then(onUserComplete, onError)
     };
     var onUserComplete = function(res){
        $scope.user = res.data;
        $http.get($scope.user.repos_url).then(onRepos, onError)
     };
     var onRepos = function(res){
        $scope.repos = res.data;
     };
     var onError = function(reason){
         $scope.error = "OOPs, there is error"
     }
   }]);
})();