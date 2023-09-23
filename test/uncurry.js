const sum = require("../sum");

const curry = require("../curry");
const uncurry = require("../uncurry");

const curriedSum = curry(sum, 5);
const uncurriedSum = uncurry(curriedSum);

// console.log(curriedSum(1)(2)(3)(4)(5));

// console.log(uncurriedSum(1, 2, 3, 4, 5));
console.log(uncurriedSum(1)(3, 6, 5)(4, 5)(5)(6));
