// Task: Last loop value
let i = 3;
while (i) {
  console.log(i--);
}

// Task: Which values does the while loop show?
let i = 0;
while (++i < 5) console.log(i); // 1, 2, 3, 4

let i = 0;
while (i++ < 5) console.log(i); // 1, 2, 3, 4, 5

// Task: Which values get shown by the "for" loop?
for (let i = 0; i < 5; i++) console.log(i); // 0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) console.log(i); // 0, 1, 2, 3, 4

// Task: Replace "for" with "while"
for (let i = 0; i < 3; i++) {
  console.log(`number ${i}!`);
}

let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}

// Task: Repeat until the input is correct
let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

// Task: Output even numbers in the loop
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
