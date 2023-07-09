let pinCode = "400088";
let regexPattern = /^[1-9]{1}[0-9]{5}$/;

if (regexPattern.test(pinCode)) {
  console.log("Valid Pin code");
} else {
  console.log("Invalid Pin code");
}


let pinCode1 = "A400088";
let regexPattern1 = /^[1-9]{1}[0-9]{5}$/;

if (regexPattern1.test(pinCode1)) {
  console.log("Valid PIN code");
} else {
  console.log("Invalid PIN code");
}


let pinCode2 = "400088B";
let regexPattern2 = /^[1-9][0-9]{4}[0-9]$/;

if (regexPattern2.test(pinCode2)) {
  console.log("Valid PIN code");
} else {
  console.log("Invalid PIN code");
}


let pinCode3 = "400 088";
let pinCode4 = "400088";
let regexPattern3 = /^[1-9][0-9]{2}[ ]?[0-9]{3}$/;

if (regexPattern3.test(pinCode3)) {
  console.log("Valid PIN code");
} else {
  console.log("Invalid PIN code");
}

if (regexPattern3.test(pinCode4)) {
  console.log("Valid PIN code");
} else {
  console.log("Invalid PIN code");
}

}

