const add = function(a, b) {
  return a+b;	
};

const subtract = function(a,b) {
  return a-b;	
};

const sum = function(array) {
  let summ = 0;

  if (array.length === 0) {
    return 0;
  }

  for (let i = 0; i < array.length; i++) {
    summ = summ + array[i];
  }

  return summ;
};


const multiply = function(array) {
  let result = 1;

  if (array.length === 0) {
    return 0;
  }

  for (let i = 0; i < array.length; i++) {
    result = result * array[i];
  }

  return result;
};


const power = function(base, power) {
  return (base ** power)	
};

const factorial = function(n) {
  if (n < 0) return undefined; // Handle negative input

  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  return fact;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
