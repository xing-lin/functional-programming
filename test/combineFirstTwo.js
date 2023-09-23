const combineFirstTwo = require("../combineFirstTwo");
const gatherArgs = require("../gatherArgs");
const result = [1, 2, 3, 4, 5].reduce(gatherArgs(combineFirstTwo));

console.log(result);

function spreadArgProps(
  fn,
  propOrder = fn
    .toString()
    .replace(
      /^(?:(?:function.*\(([^]*?)\))|(?:([^\(\)]+?)\s*=>)|(?:\(([^]*?)\)\s*=>))[^]+$/,
      "$1$2$3"
    )
    .split(/\s*,\s*/)
    .map((v) => v.replace(/[=\s].*$/, ""))
) {
  console.log("propOrder->", propOrder);
  return function spreadFn(argsObj) {
    return fn(...propOrder.map((k) => argsObj[k]));
  };
}

function bar(x, y, z) {
  console.log(`x:${x} y:${y} z:${z}`);
}

spreadArgProps(bar);
