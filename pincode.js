let pinCode = "400088";
let regexPattern = /^[1-9]{1}[0-9]{5}$/;

if (regexPattern.test(pinCode)) {
  console.log("Valid Pin code");
} else {
  console.log("Invalid Pin code");
}