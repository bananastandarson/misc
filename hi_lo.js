var tries = 0;
var winCondition = 0;

function getValidGuessFromUser() {
  var guess; // Number that the user entered
  do {
    var guess =  parseInt(prompt("Im thinking of a number from 1-100"));
  }
  while (guess < 0 || guess > 100);
}

function getValidGuessFromUser() {
  var guess; // Number that the user entered
  do {
    var guess =  prompt("Im thinking of a number from 1-100");
    if (typeof guess === "string") {
      prompt("Im thinking of a number from 1-100");
    }
    else
    {
    checkCorrect(guess);
    }
  }
  while (guess < 0 || guess > 100);
}


function checkTries(tries, computerNum, winCondition) {
  while ((tries < 7) && (winCondition === 0)) {
    tries++;
    alert("You've used " + tries + ". And you have " + (7-tries) + " tries left");
    winCondition = checkCorrect(computerNum);
  }
}

function checkCorrect(computerNum){
  var userGuess = parseInt(prompt("Im thinking of a number from 1-100")));
  if(userGuess === computerNum){
    alert("You Win!");
    return 1;
    }
    else{
      checkHighLow(userGuess, computerNum);
      return 0;
    }
  }

function checkHighLow(userGuess, computerNum) {
  if (userGuess > computerNum) {
    alert("Too high. Try again");
    checkTries();
  }
  else {
    alert("Too low. Try again");
    checkTries();
  }
}

function compNum() { return Math.floor(Math.random()* 100);};

function numberGame() {
  var tries = -1;
  var computerNum = parseInt(compNum()); console.log(computerNum);
  checkTries(tries, computerNum, winCondition);
}

if (tries >= 7){
  alert("You lose")};
