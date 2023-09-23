const identity = require("../identity");
const upper = require("../upper");

function output(msg, formatFn = identity) {
  msg = formatFn(msg);
  console.log(msg);
}

output("hello world", upper);
output("hello world");
