//Function for identifying highest number in an array

function highestNumber(arr) {
  var max = -Infinity;
  arr.forEach(function (e) {
    if (e > max) {
      //  change max
      max = e;
    }
  });
  return max;
}

//Function for identifying lowest number in an array
function lowestNumber(arr) {
  var min = Infinity;
  arr.forEach(function (e) {
    if (e < min) {
      //  change min
      min = e;
    }
  });
  return min;
}

//Function for identifying smallest number (closest to zero)
var a = [50, -50, -1, 1, .5, -.01]

function splitArray (element) {
  if (element > 0) {
    var posArr = [];
    posArr[posArr.length] = element;
    console.log(posArr);
  } else {
    var negArr = [];
    negArr[negArr.length] = element;
    console.log(negArr);
  };

};

a.forEach(splitArray);


var a = [50, -50, -1, 1, .5, -.01]
var posArr = [];
var negArr = [];

function splitArray (element) {
  if (element > 0) {
    posArr[posArr.length] = element;
  } else {
    negArr[negArr.length] = element;
  };
  console.log(posArr);
  console.log(negArr);
};

a.forEach(splitArray);
var smallestPos;
var smallestNeg;

function getSmallestFromBothArray(positiveArr, negativeArr) {
  smallestPos = lowestNumber(posArr);
  smallestNeg = highestNumber(negArr);
  console.log(smallestNeg, smallestPos);
}

function compareSmallestNumbers(smallestPos,smallestNeg) {
  if (smallestNeg*(-1) < smallestPos) {
    console.log("The smallest number in this array is " + smallestNeg);
  } else {
    console.log("The smallest number in this array is " + smallestPos);
  };
}
// this is putting all the elements together
var a = [50, -50, -1, 1, .5, -.01]

function splitArray (element) {
  if (element > 0) {
    posArr[posArr.length] = element;
  } else {
    negArr[negArr.length] = element;
  };
  console.log(posArr);
  console.log(negArr);
};
function highestNumber(arr) {
  var max = -Infinity;
  arr.forEach(function (e) {
    if (e > max) {
      //  change max
      max = e;
    }
  });
  return max;
}

//Function for identifying lowest number in an array
function lowestNumber(arr) {
  var min = Infinity;
  arr.forEach(function (e) {
    if (e < min) {
      //  change min
      min = e;
    }
  });
  return min;
}

function getSmallestFromBothArray(positiveArr, negativeArr) {
  smallestPos = lowestNumber(positiveArr);
  smallestNeg = highestNumber(negativeArr);
  console.log(smallestNeg, smallestPos);
};

function compareSmallestNumbers(smallestPos,smallestNeg) {
  if (smallestNeg*(-1) < smallestPos) {
    console.log("The smallest number in this array is " + smallestNeg);
  } else {
    console.log("The smallest number in this array is " + smallestPos);
  };
};

var smallestPos;
var smallestNeg;
var posArr = [];
var negArr = [];

function identifySmallest(arr){

  arr.forEach(splitArray);
  getSmallestFromBothArray(posArr, negArr); compareSmallestNumbers(smallestPos,smallestNeg);

}

identifySmallest(a);
