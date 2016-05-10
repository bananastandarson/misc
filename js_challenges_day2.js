//fizzzbuzz
var i = 1;

function counter(i) { return i;};

function threeRounder(i){if(i%3 === 0){fiveThreeRounder(i)}else{fiveRounder(i);};};

function fiveThreeRounder(i){if(i%5 === 0){console.log("fizzbuzz")}else{console.log("fizz");};};

function fiveRounder(i){if(i%5 === 0){console.log("buzz")} else{console.log(i)}}

function iterator(i){while(i<101){var number=counter(i); threeRounder(i); i++};}

//What number's bigger?
function bigger(num1, num2) {
  if (num1 === num2) {
    console.log("Both numbers are equal and there is no greater number.")
    }
  else {
    if (num1 > num2) {
      console.log("The greater number of " + num1 + " and " + num2 + " is " + num1 + ".");
      }
    else {
      console.log("The greater number of " + num1 + " and " + num2 + " is " + num2 + ".");
      }
    }
  }


//language
function greeter(helloString){
  if (helloString === "en"){
    console.log("Hello World");
  }
  else{
    if (helloString === "tg"){
      console.log("Kumusta");
    }
    else{
      if (helloString ==="ru"){
      console.log("Privet!");
      }
      else{
        console.log("I don't speak that");
      }
    }
  }
}



//grader
function asianParents(score){
  if (score >= 90){
    console.log("A for Average. -_-");
  }
  else{
    if (score >= 80){
      console.log("B for BAD!");
    }
    else{
      if (score >= 70){
        console.log("C is for Catastrophic.");
      }
      else{
        if (score >= 60) {
          console.log("D is for Disowned.");
        }
        else {
          console.log("F is FORGOTTEN FOREVER.");
        }

      }
    }
  }
}

//plural nouns

function pluralize(num, obj){
  if (num < 2) {console.log(num + " " + obj);}
  else{
    if (!((obj === ("sheep")) || (obj === ("goose")) || (obj === ("child")) || (obj === ("person")) || (obj === ("species")) ))
    {console.log(num + " " + obj + "s");}
    else{
      if (obj === "sheep"){console.log(num + " sheep");}
      else{
        if (obj === "goose") {console.log(num + " geese");}
        else{
          if (obj === "child") {console.log(num + " children");}
          else{
            if (obj === "person") {console.log(num + " people");}
            else{
              if (obj === "species") {console.log(num + " species");}
              else{
                console.log("I don't know that thing")
              }
            }
          }
        }
      }
    }
  }
}


//even or odd
var i = 0;

function counter(i) { return i;};

function even(i){
  if(i%2 === 0){
    console.log(i + " is even.")
  }
  else {
    console.log(i + " is odd.")
  }
}
function iterator(i) {
  while(i<16) {
    var number=counter(i); even(number); i++
    };
  }
