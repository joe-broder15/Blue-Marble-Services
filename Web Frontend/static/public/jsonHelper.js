function createJSON(){
  //Creates JSON for alexa interaction
  var data = {
    "email": $("#email").val(),
    "firstName": $("#firstName").val(),
    "lastName": $("#lastName").val(),
    "email": $("#email").val(),
    "template": "Alexa Interaction",
    "skillName": $("#skillName").val(),
    "invocationName": $("#invocationName").val(),
    "intents":[
      {
        "intent": "intent",
        "utterances": {
          "1": $("#utterance1").val(),
          "2": $("#utterance2").val(),
          "3": $("#utterance3").val(),
          "4": $("#utterance4").val(),
          "5": $("#utterance5").val(),
          "6": $("#utterance6").val()
        },
        "response": $("#response1").val()
      }
    ],
    "category": $("#categoryDropdownMenu").text(),
    "shortDescription": $("#shortDescription").val(),
    "longDescription": $("#longDescription").val(),
    "keywords": $("#keywords").val()
  };
  //return json object
  return JSON.stringify(data);

};

//sends json to server
function sendJSON(data){
  //make post request with json object
  $.post( "https://metavoice-lambda-dev.herokuapp.com/post", {
    javascript_data: data
  });
}
