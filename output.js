const identity = require("./identity");

module.exports = function output(msg, formatFn = identity) {
  msg = formatFn(msg);
  console.log(msg);
};
