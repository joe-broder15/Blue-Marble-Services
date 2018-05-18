//INTERACTION DIRECTIVE
app.directive( 'interactionCard', function ( $compile ) {
  return {

    //only usable as an element, and get external html
    restrict: 'E',
    scope: { text: '@' },
    template: "",
    templateUrl: 'static/views/interactionCard.html',

    controller: function ( $scope, $element ) {

      //USED TO CREATE DROPDOWN WITH NG-REPEAT
      $scope.category = "Select";
      $scope.categories =["Business & Finance", "Connected Car", "Education and Refference", "Food & Drink",
                          "Games, Trivia & Accessories", "Health & Fitness", "Kids", "Lifestyle", "Local",
                          "Movies & TV", "Music & Audio", "News", "Novelty & Humor", "Productivity", "Shopping",
                          "Smart Home", "Social", "Sports", "Travel & Transportation", "Utilities"]

      //switch category based on dropdown item selected
      $scope.switchCategory = function (c) {
        $scope.category = c;
      };

      //DELETES CARD ON CLICK OF BACK BUTTON
      $scope.destroy = function() {
        $('#templateSelectorNextButton').toggleClass('btn-primary');
        $('#templateSelectorNextButton').toggleClass('btn-disabled');
        $element.remove();
      };

      //SUBMITS JSON TO SERVER and clears all fields
      $scope.submit = function() {
        let data = createJSON();
        sendJSON(data);
        $('input').val('');
        $('textarea').val('');
      }
    }
  };
});
