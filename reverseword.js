function countString(userString){
  var totalLength = userString.length;
  var stringPosition = 0;
  var subStringPosition = 0;
  var processedString = "";
  while(stringPosition < totalLength){
    stringPosition++;
    if(userString.charAt(stringPosition) === " "){
      processedString = processedString +  reverseWord(returnSubString(subStringPosition, stringPosition, userString)) + " ";
      subStringPosition = stringPosition + 1;
      }
  }
  processedString = processedString + reverseWord(returnSubString(subStringPosition, stringPosition, userString));
  console.log(processedString);
}

function returnSubString(positionOne, positionTwo, userString){
  return userString.substring(positionOne, positionTwo);
}

function reverseLetters(singleWord, wordLength){
    return singleWord.charAt(wordLength)
}

function reverseWord(singleWord){
  var reversedWord= "";
  var position = singleWord.length;
  if (position >= 5){
    while(position >= 0){
      reversedWord = reversedWord + reverseLetters(singleWord, position);
      position--;
    }
    return reversedWord;
  }
  else {
    return singleWord;
  }
}
