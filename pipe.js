module.exports = function pipe(...fns) {
  var [fn1, fn2, ...rest] = fns;

  var pipedFn = function piped(...args) {
    return fn2(fn1(...args));
  };

  if (rest.length === 0) return pipedFn;

  return pipe(pipedFn, ...rest);
};
