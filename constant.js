module.exports = function constant(v) {
  return function value() {
    return v;
  };
};
