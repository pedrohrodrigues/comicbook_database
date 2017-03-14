angular.module('appComic',['ui.bootstrap']);
angular.module('appComic').controller('comicController', function($scope, $http) {

	  var _selected;
    $scope.comicsFromJson = new Array();
    $scope.comicsNamesFromJson = new Array();
    $scope.selected = undefined;


    $http.get('assets/json/comics_json.json').then(function(response) {
      $scope.comicsFromJson = response.data.comics;
      for(var i =0; i<$scope.comicsFromJson.length;i++)
      {
        $scope.comicsNamesFromJson.push($scope.comicsFromJson[i].name);
      }  
    });


    $scope.ngModelOptionsSelected = function(value) {
    if (arguments.length) {
      _selected = value;
    } else {
      return _selected;
    }
  };

  $scope.modelOptions = {
    debounce: {
      default: 500,
      blur: 250
    },
    getterSetter: true
  };


});