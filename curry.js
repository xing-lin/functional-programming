module.exports = function curry(fn, arity = fn.length) {
  console.log("curry->", fn, arity);
  return (function nextCurried(prevArgs) {
    console.log("prevArgs->", prevArgs);
    return function curried(nextArg) {
      console.log("nextArg->", nextArg);
      var args = prevArgs.concat([nextArg]);
      if (args.length >= arity) {
        return fn(...args);
      } else {
        return nextCurried(args);
      }
    };
  })([]);
};
