function output(txt) {
  console.log(txt);
}

// function printIf(predicate, msg) {
//   if (predicate(msg)) {
//     output(msg);
//   }
// }

function isShortEnough(str) {
  return str.length <= 5;
}

var msg1 = "Hello";
var msg2 = msg1 + "world";

const when = require("../when");
const partialRight = require("../partialRight");
const not = require("../not");
const uncurry = require("../uncurry");
const printIf = uncurry(partialRight(when, output));

printIf(isShortEnough)(msg1);
printIf(isShortEnough)(msg2);

printIf(isShortEnough, msg1);
printIf(isShortEnough, msg2);
