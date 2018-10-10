//default function parameters

function multiply1(a, b) {
  b = (typeof b !== 'undefined') ?  b : 1;
  return a * b;
}

multiply1(5, 2); // 10
multiply1(5, 1); // 5
multiply1(5);    // 5


function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5, 1); // 5
multiply(5);    // 5
