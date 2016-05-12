function makeCar(inputMake, inputYear, inputColor) {//start function
  var make = inputMake;//private variable
  var modelYear = inputYear;//private variable
  var speed = 0;
  var speedUnit = "mph";
  return { //start object
    color: inputColor,
    tellInfo: function() {//start function
      return make +" "+ modelYear +" "+ this.color;
    },//end function
    getSpeed: function() {//start function
      return speed;
    },//end function
    accelerate: function() {//start function
      if (speed <= 75){
        speed = speed + 10;
      }
      else {
        speed = 85;
      }
    },//end function
    brake: function() {//start function
      if (speed >= 7){
        speed = speed - 7;
      }//end of if
      else{
        speed = 0;
      };//end of else
    },//end of function
    downHillBrake: function(){//start function
      speed = speed - Math.random()*(speed/2);
    }  //end function
  }; //end object
}//end function
var car = makeCar("Toyota",2001,"silver");
var car2 = makeCar("Kia",2014,"green");
car.tellInfo();

/*car.getSpeed();
car.accelerate();
car.brake();*/

function speedUp(carObject){
  while(carObject.getSpeed() < 70){
    carObject.accelerate();
    console.log(carObject.getSpeed());
  };
}

function slowDown(carObject){
  while(carObject.getSpeed() > 0){
    carObject.brake();
    console.log(carObject.getSpeed());
  }
}
