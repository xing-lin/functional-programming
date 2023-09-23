module.exports = function spreadArgs(fn) {
  return function spreadFn(argsArr) {
    return fn(...argsArr);
  };
};
