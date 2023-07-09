let email = "abc.xyz@bridgelabz.co.in";
let regexPattern = /^abc\.[a-zA-Z]+\@/;
if (regexPattern.test(email)) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}
