// Task: Is "else" required?

// No, it's behavior is same

// Task: Rewrite the function using '?' or '||'

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

function checkAge(age) {
  return age > 18 ? true : confirm('Did parents allow you?');
}

// Task: Function min(a, b)
function min(a, b) {
  return a < b ? a : b;
}

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

// Task: Function pow(x,n)
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

pow(3, 2) == 9
pow(3, 3) == 27
pow(1, 100) == 1
