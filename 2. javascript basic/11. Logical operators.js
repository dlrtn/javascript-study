//Task: What's the result of OR?
console.log( null || 2 || undefined ); // 2

//Task: What's the result of OR'ed alerts?
console.log( console.log(1) || 2 || console.log(3) ); // 1, 2

//Task: What's the result of AND?
console.log( console.log(1) && null && console.log(2) ); // 1, undefined

//Task: What's the result of AND'ed alerts?
console.log( console.log(1) && console.log(2) ); // undefined

//Task: The result of OR AND OR
console.log( null || 2 && 3 || 4 ); // 3

//Task: Check the range between
let age = 20;
if (age >= 14 && age <= 90) {
  console.log("true");
}

//Task: Check the range outside
let age = 20;

if (!(age >= 14 && age <= 90)) {
  console.log("true");
}

//Task: A question about "if"
if (-1 || 0) console.log( 'first' ); // first
if (-1 && 0) console.log( 'second' ); // undefined
if (null || -1 && 1) console.log( 'third' ); // third

//Task: Check the login
let login = prompt("Who's there?", "");

if (login == "Admin") {
  let password = prompt("Password?", "");

  if (password == "TheMaster") {
    console.log("Welcome!");
  } else if (password == "" || password == null) {
    console.log("Canceled.");
  } else {
    console.log("Wrong password");
  }
}
else if (login == "Cancel") {
  console.log("Canceled.");
}
else {
  console.log("I don't know you");
}