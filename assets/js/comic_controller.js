angular.module('appComic',['ui.bootstrap']);
angular.module('appComic').controller('comicController', function($scope, $http) {

	  var selectedName;
    $scope.comicsFromJson = new Array();
    $scope.comicsNamesFromJson = new Array();
    $scope.selected = undefined;
    $scope.selectedComic = new Array();


    $http.get('assets/json/comics_json.json').then(function(response) {
      $scope.comicsFromJson = response.data.comics;
      for(var i =0; i<$scope.comicsFromJson.length;i++)
      {
        $scope.comicsNamesFromJson.push($scope.comicsFromJson[i].name);
      }  
    });


    $scope.ngModelOptionsSelected = function(value) {
    if (arguments.length) {
      selectedName = value;

    } else {
      return selectedName;
    }
  };

  $scope.modelOptions = {
    debounce: {
      default: 500,
      blur: 250
    },
    getterSetter: true
  };

  $scope.findComic = function(value)
  {
    for(var i =0; i<$scope.comicsFromJson.length;i++)
    {
      if($scope.comicsFromJson[i].name == $scope.selectedName)
      {
        $scope.selectedComic['name']=$scope.comicsFromJson[i].name;
        $scope.selectedComic['cover']=$scope.comicsFromJson[i].cover;
        $scope.selectedComic['plot']=$scope.comicsFromJson[i].plot;
      }
    }   

      $scope.showSearch=true;
  }


});