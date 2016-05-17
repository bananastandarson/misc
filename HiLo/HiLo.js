// alert("Running...");
$(document).ready(function() {
// generate a random number between 1 and 100
  var compNumber = Math.floor(Math.random()*100);
  var count = 0; //counts the number of guesses; max is 7
  var guessArr = [];// will contain all of the guesses

// begin the function. user puts a guess in the input box, on click that guess gets compared to the random number
  $("#guessbtn").on("click", function () {
    var userGuess = parseInt($("#guess").val()); //value from input becomes value of userGuess variable

    // Clear out the guess input field
    $("#guess").val("");

    if (userGuess < 1 || userGuess > 100) {
      alert("Your guess is not a number between 1 and 100. Try again."); // this validates that the guess fits the guess criteria
      $("#guess").val("");
      userGuess = parseInt($("#guess").val()); //value from input becomes value of userGuess variable
    };

    if(guessArr.includes(userGuess)){
      alert("You have already guessed that number! Guess again!");
    //   // userGuess = parseInt($("#guess").val()); //value from input becomes value of userGuess variable
    } else {
      if ((userGuess > compNumber)&& (count <= 6)) {
        $("ol").append("<li>" + userGuess + " is too high</li>");// adds a line to page with guess and whether it is low or high and adds to number of guesses
        count++;
        $("#guess").val(""); //executes when userGuess is greater than random number. adds guess to bottom of the list for user reference
        guessArr[guessArr.length]= userGuess; // takes the guess and adds it to the end of the guess array
      };

      if ((userGuess < compNumber)&& (count <= 6))  {
        $("ol").append("<li>" + userGuess + " is too low</li>");
        count++; // adds a line to page with guess and whether it is low or high and adds to number of guesses
        $("#guess").val(""); //executes when userGuess is less than than random number. adds guess to the bottom of the list for user reference
        guessArr[guessArr.length]= userGuess; // takes the guess and adds it to the end of the guess array

      };

      if ((userGuess === compNumber)&& (count <= 6))  {
        $("ol").append("<li> YOU WIN! The number is " + userGuess + "</li>");
        $("#guess").val("");
        alert("You WIN!!!!!");
        count++;
        // executes when the guess is equal to the random number

      };

      if (count > 6) {
        alert("You have used all of your guesses. The number is " + compNumber);
        $("#youLose").append("You have used all of your guesses. The number is " + compNumber);
        // executes when the guess is equal to the random number
      };


    };



  });



});
