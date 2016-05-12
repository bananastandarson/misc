// function checkUserIdPass () {
//   do {
//     var uid = prompt("User ID please");
//     if (uid.length < 6 || uid.includes("#")  || uid.includes("$")) {
//       if(uid.length < 6){
//         console.log(tooShort)
//       }
//       alert("User ID bad");
//     };
//   } while (uid.length < 6 || uid.includes("#")  || uid.includes("$"));
//
//   do {
//     var pass = prompt("Password please");
//     if (pass.length < 6 || !(pass.includes("#") || pass.includes("$"))) {
//       alert("Password needs at least six characters");
//       };
//     } while (pass.length < 6 || !(pass.includes("#") || pass.includes("$")));
// }

function signUp() {
  var returnObj = {
    reasonOne: {},
    reasonTwo: {},
    reasonThree: {},
    printResults: function(){
      var printString = "";
      if (this.reasonOne.valid === false){
        printString += this.reasonOne.reason;
      }
      if (this.reasonTwo.valid === false){
        if (printString != ""){
          printString += "\n"
        };
        printString += this.reasonTwo.reason;
      }
      if (this.reasonThree.valid === false){
        if (printString != ""){
          printString += "\n"
        };
        printString += this.reasonThree.reason;
      }
      alert(printString);
    }//end function
  };
  do {
    var uid = prompt("User ID please");
    if (uid.length < 6 || uid.includes("#")  || uid.includes("$")) {
      if(uid.length < 6){
        returnObj.reasonOne = checkLength(uid);
      }
      if(uid.includes("#")){
        returnObj.reasonTwo = checkUidHash(uid);
      }
      if(uid.includes("$")){
        returnObj.reasonThree = checkUidDollar(uid);
      }
      returnObj.printResults();
      returnObj.reasonOne = {};
      returnObj.reasonTwo = {};
      returnObj.reasonThree = {};
    };
  } while (uid.length < 6 || uid.includes("#")  || uid.includes("$"));
  alert("User ID accepted!");
  do {
    var pass = prompt("Password please");
    if (pass.length < 6 || !(pass.includes("#") || pass.includes("$"))) {

      if(pass.length < 6){
        returnObj.reasonOne = checkLength(pass);
      }
      if(!(pass.includes("#") || pass.includes("$"))){
        returnObj.reasonTwo = checkPassSpecial(pass);
      }
      returnObj.printResults();
      returnObj.reasonOne = {};
      returnObj.reasonTwo = {};
      returnObj.reasonThree = {};
    };
  } while (pass.length < 6 || !(pass.includes("#") || pass.includes("$")));
  alert("Password accepted!");

}


function checkLength(uidPass){
  var badInfo = {valid: false, reason: 'Needs six characters'};
  var goodInfo = {valid: true};
  if(uidPass.length < 6){
    return badInfo;
  };
  return goodInfo;
}

function checkUidHash(uid){
  var badInfo = {valid: false, reason: 'Cannot contain "#"'};
  var goodInfo = {valid: true};
  if(uid.includes("#")){
    return badInfo;
  };
  return goodInfo;
}

function checkUidDollar(uid){
  var badInfo = {valid: false, reason: 'Cannot contain "$"'};
  var goodInfo = {valid: true};
  if(uid.includes("$")){
    return badInfo;
  };
  return goodInfo;
}

function checkPassSpecial(pass){
  var badInfo = {valid: false, reason: 'Must contain "#" or "$"'};
  var goodInfo = {valid: true};
  if(!(pass.includes("#") || pass.includes("$"))){
    return badInfo;
  };
  return goodInfo;
}
