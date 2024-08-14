const add = function(a,b) {
 return a+b;
};

const subtract = function(a,b) {
 return a-b;
};

const sum = function(nums) {
 return nums.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(nums) {
 return nums.reduce((acc, curr) => acc * curr);
};

const power = function(a,b) {
 return Math.pow(a,b);
};

const factorial = function(n) {
 let product = 1;

 if (n == 0) return 1;

 for (let i=n; i>0; i--) {
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
