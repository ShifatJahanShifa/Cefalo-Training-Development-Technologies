const assert = require('assert');

function divide(a, b) {
  assert(b !== 0, 'Division by zero');
  return a / b;
}

console.log(divide(10, 2));  // 5
console.log(divide(10, 0));  // AssertionError: Division by zero
