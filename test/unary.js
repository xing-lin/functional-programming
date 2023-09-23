const unary = require("../unary");
const sum = require("../sum");

const looseCurry = require("../looseCurry");

const adder = looseCurry(sum, 2);

console.log([1, 2, 3, 4, 5].map(unary(adder(3))));
// [1, 2, 3, 4].map((a, b, c) => {
//   console.log(a, b, c);
// });
