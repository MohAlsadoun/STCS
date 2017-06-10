

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


/* old
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})   */

/* sum total checked
$scope.getTotal = function(){
    var total = 0;
    for(var i = 0; i < $scope.cart.products.length; i++){
        var product = $scope.cart.products[i];
        total += (product.price * product.quantity);
    }
    return total;
}
*/




.controller('PlaylistsCtrl', function($scope) {
  var playlists = [
    { totalServ: 8 , id: 3500041120 , bill: 1470.04 },
    { totalServ: 6 , id: 5058349412 , bill: 18296.57 },
    { totalServ: 37 , id: 35000338190 , bill: 30511.59 },
    { totalServ: 2 , id: 35000704790 , bill: 375.86 }
  ];

  $scope.playlists = playlists;
})



.controller('accountsCtrl', function($scope, $http) {
 
  // You can change this url to experiment with other endpoints
  var accountsApi = '';
   var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://demo3095593.mockable.io/", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    $scope.accounts = JSON.parse(xhttp.responseText);
          console.log( $scope.accounts.records[0].id );

  //   var records = [
  //   { totalServ = response.totalServ , id =  response.id , bill: response.bill },
  // ];

  // This should go in a service so we can reuse it
  // $http.jsonp(accountsApi,{jsonpCallbackParam: 'accountsCtrl'}).
  //   success(function(data, status, headers, config) {
  //     $scope.accounts = data.response;
  //     console.log( data.response );       //how to handle json??
  //   }).
  //   error(function(data, status, headers, config) {
  //     console.log( 'accounts load error.' );
  //   });
   
})
 

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
