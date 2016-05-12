function notSame(uid, pass) {
  if (uid === pass) {
    return {
      valid : false,
      reason: "UserId cannot be the same as the password."
    } // end of object
  } //end of if
  else {
    return { valid : true }
  }
} //end of functions

function longEnough(uid, pass) {
  if (uid.length >= 6 && pass.length >= 6) {
    return { valid: true };
  }
  else {
    return {
      valid: false,
      reason: "UserID and password must each have at least 6 characters."
    }
  }
}

function rightUidCharacters(uid) {
  if (uid.includes("#") || uid.includes("!") || uid.includes("$")) {
    return { valid: false, reason: "UserID cannot contain any of the following characters: # $ !" }
  }
  else {
    return { valid: true }
  }
}

function rightPassCharacters(pass) {
  if (pass.includes("#") || pass.includes("!") || pass.includes("$")) {
    return { valid: true }
  }
  else {
    return { valid: false, reason: "Password must contain at least one of the following characters: # $ !" }
  }
}

function isPasswordPassword(pass) {
  if (pass === "password") {
    return { valid: false, reason: "Password cannot be 'password'."}
  }
  else { return {valid: true}}
}

function masterChecker(uid, pass) {
  if ( notSame(uid, pass).valid && longEnough(uid, pass).valid && rightUidCharacters(uid).valid && rightPassCharacters(pass).valid && isPasswordPassword(pass).valid) {
    return "Access granted";
  }
  else {
    if (!(notSame(uid,pass).valid)) {
      console.log(notSame(uid,pass).reason);
    }
    if (!(longEnough(uid,pass).valid)) {
      console.log(longEnough(uid,pass).reason);
    }
    if (!(rightUidCharacters(uid).valid) ) {
      console.log(rightUidCharacters(uid).reason);
    }
    if (!(rightPassCharacters(pass).valid) ) {
      console.log(rightPassCharacters(pass).reason);
    }
    if (!(isPasswordPassword(pass).valid)) {
      console.log(isPasswordPassword(pass).reason);
    }
  }
}
