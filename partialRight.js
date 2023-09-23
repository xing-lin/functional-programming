const reverseArgs = require("./reverseArgs");
const partial = require("./partial");

module.exports = function partialRight(fn, ...presetArgs) {
  return reverseArgs(partial(reverseArgs(fn), ...presetArgs.reverse()));
};
