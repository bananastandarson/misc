var originnumber = "4728397476172374";
var newnumber = originnumber.substring(0,15);
var lastnumber = originnumber.charAt(15);

var reversednum = newnumber.split("").reverse().join("");

//multiplied by 2


function addoddindex(odd) {return parseInt(odd.charAt(1)) + parseInt(odd.charAt(3)) + parseInt(odd.charAt(5)) + parseInt(odd.charAt(7)) + parseInt(odd.charAt(9)) + parseInt(odd.charAt(11)) + parseInt(odd.charAt(13));};

addoddindex(reversednum)


function byTwo(string) {return (((parseInt(string.charAt(14))*2) > 9)*(-9) + string.charAt(14)*2) + (((parseInt(string.charAt(12))*2) > 9)*(-9) + string.charAt(12)*2) + (((parseInt(string.charAt(10))*2) > 9)*(-9) + string.charAt(10)*2) + (((parseInt(string.charAt(8))*2) > 9)*(-9) + string.charAt(8)*2) + (((parseInt(string.charAt(6))*2) > 9)*(-9) + string.charAt(6)*2) + (((parseInt(string.charAt(4))*2) > 9)*(-9) + string.charAt(4)*2) + (((parseInt(string.charAt(2))*2) > 9)*(-9) + string.charAt(2)*2) + (((parseInt(string.charAt(0))*2) > 9)*(-9) + string.charAt(0)*2);}

function addall(reversednum) {return addoddindex(reversednum) + byTwo(reversednum);};
