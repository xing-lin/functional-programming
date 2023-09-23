// 只要一个实参
module.exports = function unary(fn) {
  return function onlyOneArg(arg) {
    return fn(arg);
  };
};
