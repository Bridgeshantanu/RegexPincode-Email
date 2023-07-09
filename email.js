let email = "abc.xyz@bridgelabz.co.in";
let regexPattern = /^abc\.[a-zA-Z]+\@/;
if (regexPattern.test(email)) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}

let email1 = "abc.xyz@bridgelabz.co.in";
let regexPattern1 = /^abc\.[a-zA-Z]+\@bridgelabz\./;

if (regexPattern1.test(email1)) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}

let email2 = "abc.xyz@bridgelabz.co.in";
let regexPattern2 = /^abc\.[a-zA-Z]+[@]bridgelabz\.[a-zA-Z]+\./;

if (regexPattern2.test(email2)) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}
