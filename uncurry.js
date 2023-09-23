module.exports = function uncurry(fn) {
  return function uncurried(...args) {
    console.log("uncurried->", args);
    var ret = fn;
    for (let i = 0; i < args.length; i++) {
      ret = ret(args[i]);
    }
    return ret;
  };
};
