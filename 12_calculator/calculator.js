const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	return nums.reduce((total, num) => total+num, 0);
};

const multiply = function(nums) {
  return nums.reduce((total, num) => total*num, 1);
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(n) {
	if (n < 0) return "ERROR";
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
