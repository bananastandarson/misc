var originalNum = prompt("Please enter your Visa cc number");

var newstr = originalNum.substring(0,15);
newstr;

var lastNum = parseInt(originalNum.charAt(15));
console.log("The last number of your cc number is " + lastNum);

//function that turns a character into an integer
function charToInt(string, index) { return parseInt(string.charAt(index));
};
console.log("This is the character at " + 13 + " from the string: " + newstr + " being turned into the integer " + charToInt(newstr,13));

//function that multiplies a number by 2
function byTwo(string, index) { return charToInt(string, index) * 2;};
console.log("the number as position " + 14 + " times 2 is " + byTwo(newstr, 14));

//function that checks for whether a number * 2 is greater than 9
function greaterThanNine(string, index) { return byTwo(string, index) > 9;};
console.log("the number as position " + 14 + " times 2 is " + byTwo(newstr, 14) + " is greater than 9: " + greaterThanNine(newstr, 14));

//function that yields -9 or 0
function minusNine(string, index) { return greaterThanNine(string, index) * (-9);};
console.log("The function yielded " + minusNine(newstr, 14) + "as a multiplier because the previous function yielded " + greaterThanNine(newstr, 14));

//function that adds -9 or 0 to a number * 2
function addNineOrZero(string, index) { return minusNine(string, index) + byTwo(string, index);};
console.log("When you take a number, multiply it by 2, and subtract 9 if it is greater than 9, you get " + addNineOrZero(newstr, 14));


//function that adds all of the integers from the 'reversed' string
function sumOddIndx(string) { return charToInt(newstr, 13) + charToInt(newstr, 11) + charToInt(newstr, 9) + charToInt(newstr, 7) + charToInt(newstr, 5) + charToInt(newstr, 3) +  charToInt(newstr, 1);}
console.log("Sum of all numbers in odd positions: " + sumOddIndx(newstr));

//function adds all "even" characters
function sumEvenIndx(string) { return addNineOrZero(newstr, 14) + addNineOrZero(newstr, 12) + addNineOrZero(newstr, 10) + addNineOrZero(newstr, 8) + addNineOrZero(newstr, 6) + addNineOrZero(newstr, 4) + addNineOrZero(newstr, 2) + addNineOrZero(newstr, 0);};
console.log("Sum of all numbers in even oppositions: " + sumEvenIndx(newstr));

//function adds even and odd
function addEvenOdd(string) { return sumEvenIndx(string) + sumOddIndx(string);};
console.log("Sum of Even and Odd Numbers: " + addEvenOdd(newstr));

//function get modulo 10
function getModulo(string) { return addEvenOdd(string) % 10;};
console.log("The module of the sum is " + getModulo(newstr));


//function to validated once and freaking for all
function checkModulo(string, lastnumber) { return lastnumber === getModulo(string);};
console.log("Your credit card number is validated: " + checkModulo(newstr, lastNum));
