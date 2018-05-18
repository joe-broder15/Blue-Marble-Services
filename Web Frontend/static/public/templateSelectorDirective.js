//TEMPLATE SELECTOR DIRECTIVE
app.directive( 'templateSelector', function ( $compile ) {
  return {

    //Only usable as an element
    restrict: 'E',
    scope: { text: '@' },
    template: "",

    //get html from external file
    templateUrl: 'static/views/templateSelector.html',

    controller: function ( $scope, $element ) {

      //initial value of dropdown
      $scope.templateType = "Select";

      //CHANGE TEMPLATE TYPE BASED ON DROPDOWN ITEM
      $scope.switchTemplate = function (newTemplate) {
        $scope.templateType = newTemplate;
      };

      //RENDER NEXT CARD BASED ON TEMPLATE TYPE
      $scope.nextCard = function(){

        //Check if next card is already created
        if($('#templateSelectorNextButton').hasClass('btn-primary')){
          //check for template type and maake appropriate card
          if($scope.templateType == 'Alexa Interaction'){
            var el = $compile( "<interaction-card></interaction-card>" )( $scope );
            $element.parent().append(el);

            //disable buttons
            $('#templateSelectorNextButton').toggleClass('btn-primary');
            $('#templateSelectorNextButton').toggleClass('btn-disabled');
          }


        };
      };
    }
  };
});
