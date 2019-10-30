$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();

    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());
    if(!countTo || !countBy){
     $(".error-message").text("Please enter a number");
    }
    else if(isNaN(countTo) || isNaN(countBy)) {
      $(".error-message").text("Please enter a number");
    }
    else if(countTo < 0 || countBy < 0) {
      $(".error-message").text("Please enter a positive number");
    }
    else if(countTo < countBy){
      $(".error-message").text("Count to number must be greater than count by number");
    }
    else {
      for (var index = countBy; index <= countTo; index += countBy){
        $("#result").append("<li>" + index + "</li>");
      }
    }
  })
});
