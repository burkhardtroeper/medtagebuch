angular.module('controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})


.controller('startseite', function($scope, tagebuchdata, $state) {

  $scope.uebersicht = function (number) {

    tagebuchdata.tagebuchAktuell = number;
    $state.go('app.datenausgabe');


  };

  $scope.eingabe = function (number) {

    tagebuchdata.tagebuchAktuell = number;
    $state.go('app.dateneingabe');

  };


  })

.controller('dateneingabe', function($scope, tagebuchdata, $ionicModal, $state) {

  $scope.tagebuchName = tagebuchdata.tagebuchName[tagebuchdata.tagebuchAktuell];
  $scope.tagebuchAktuell = tagebuchdata.tagebuch[tagebuchdata.tagebuchAktuell];


  $scope.neu = function() {

    tagebuchdata.neuFlag = true;
    $state.go('app.dateneingabe2');

  };

  $scope.nachtrag = function() {

    tagebuchdata.neuFlag = false;
    $state.go('app.dateneingabe2');

  };

  $scope.verlauf = function() {

    $state.go('app.datenuebersicht');

  };

  $scope.editieren = function () {

    $scope.editFlag = true;

  };


})


.controller('dateneingabe2', function($scope, tagebuchdata, $ionicModal, $state) {

  $scope.tempeingabe = new tagebuchdata.eingabeconstructor[tagebuchdata.tagebuchAktuell];

  $scope.neuFlag = tagebuchdata.neuFlag;

  $scope.dateneingabetemplate = tagebuchdata.tagebuchURL.eingabe[tagebuchdata.tagebuchAktuell];

  $scope.tagebucheingabenspeichern = function () {

    tagebuchdata.tagebuch[tagebuchdata.tagebuchAktuell].push($scope.tempeingabe);
    console.log(tagebuchdata.tagebuch[tagebuchdata.tagebuchAktuell]);
    $state.go('app.dateneingabe');

  };

  $scope.medikamenteingabe = function() {

    $scope.wirkstoffetempdata = {

      repeatselected: null,
      availableoptions: $scope.modalwirkstoffe,
      dosis: null

    };

    $scope.openModal();

  };

  $scope.medikamenteingabespeichern = function () {

    var intermediatemedikamente = {

      wirkstoff: $scope.wirkstoffetempdata.repeatselected,
      dosis: $scope.wirkstoffetempdata.dosis

    };

    $scope.tempeingabe.medikamente.push(intermediatemedikamente);
    $scope.closeModal();

  };



  $ionicModal.fromTemplateUrl('modalmedikamente.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });



})



.controller('datenuebersicht', function($scope, tagebuchdata, $ionicModal) {

  console.log(tagebuchdata.tagebuchAktuell);

  $scope.tagebuchName = tagebuchdata.tagebuchName[tagebuchdata.tagebuchAktuell];

  $scope.tempausgabe = tagebuchdata.tagebuch[tagebuchdata.tagebuchAktuell];

  console.log($scope.tempausgabe);

  $scope.datenausgabetemplate = tagebuchdata.tagebuchURL.ausgabe[tagebuchdata.tagebuchAktuell];

  $scope.datenausgabemodaltemplate = tagebuchdata.tagebuchURL.ausgabemodal[0];



  $scope.showmore = function (index) {

    console.log(index);
    $scope.modalmoreinfodata = $scope.tempausgabe[index];
    $scope.openModal();


  };

  $ionicModal.fromTemplateUrl($scope.datenausgabemodaltemplate, {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

});
