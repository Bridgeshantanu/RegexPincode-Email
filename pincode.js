let pinCode = "400088";
let regexPattern = /^[1-9]{1}[0-9]{5}$/;

if (regexPattern.test(pinCode)) {
  console.log("Valid Pin code");
} else {
  console.log("Invalid Pin code");
}

let pinCode1 = "A400088";
let regexPattern1 = /^[1-9][0-9]{5}$/;

if (regexPattern1.test(pinCode1)) {
  console.log("Valid PIN code");
} else {
  console.log("Invalid PIN code");
}