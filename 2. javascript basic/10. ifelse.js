// Task: if(a string with zero)
if ("0") {
  console.log("Hello"); // be shown
}

// Task: The name of JavaScript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  if (line === "ECMAScript") {
    console.log("Right!");
  } else {
    console.log("You don't know? ECMAScript!");
  }

  rl.close();
});

// Task: Show the sign
rl.on("line", (a) => {

  if (a > 0) {
    console.log(1);
  } else if (a < 0) {
    console.log(-1);
  } else {
    console.log(0);
  }

  rl.close();
});

// Task: Rewrite 'if' into '?'
let result;

a + b < 4 ? (result = "Below") : (result = "Over");

// Task: Rewrite 'if..else' into '?'
let message;

message = login == "Employee" ? "Hello" : login == "Director" ? "Greetings" : login == "" ? "No login" : "";