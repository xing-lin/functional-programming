// function foo(x, y) {
//   console.log(x + y);
// }

// function bar(fn) {
//   fn(...[3, 9]);
// }

// bar(foo);

// function isPrime(num, divisor = 2) {
//   if (num < 2 || (num > 2 && num % divisor == 0)) {
//     console.log(num, divisor, num % divisor);
//     return false;
//   }

//   if (divisor <= Math.sqrt(num)) {
//     console.log(divisor, num, Math.sqrt(num));
//     return isPrime(num, divisor + 1);
//   }

//   return true;
// }

// console.log(isPrime(21));

// function fib(n) {
//   if (n <= 1) return n;
//   return fib(n - 1) + fib(n - 2);
// }

// "use strict";

// function sum2(num1, ...nums) {
//   return nums.length > 0 ? num1 + sum2(...nums) : num1;
// }

// function sum3(num1, num2, ...nums) {
//   num1 = num1 + num2;
//   if (nums.length === 0) return num1;
//   return sum3(num1, ...nums);
// }
"use strict";
let arr = [];
for (let i = 0; i < 100000; i++) {
  arr.push(i);
}

// function sumA(total, ...nums) {
//   for (let i = 0; i < nums.length; i++) {
//     total = total + nums[i];
//   }

//   return total;
// }

// console.log(sumA(...arr));

function trampoline(fn) {
  return function trampolined(...args) {
    var result = fn(...args);

    while (typeof result == "function") {
      result = result();
    }

    return result;
  };
}

// 52455 max recursion

var sum = trampoline(function sum(num1, num2, ...nums) {
  num1 = num1 + num2;
  if (nums.length === 0) return num1;
  return () => sum(num1, ...nums);
});
console.log(sum(...arr));

// // console.log(sum2(...arr));
// console.log(sum3(...arr));
// console.log(sum2(...[1, 2, 3]));
// console.log(sum3(...[1, 2, 3]));

// function sum(num1, num2, ...nums) {
//   num1 = num1 + num2;
//   if (nums.length == 0) return num1;
//   return sum(num1, ...nums);
// }
