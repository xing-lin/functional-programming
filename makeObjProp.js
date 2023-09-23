const setProp = require("./setProp");

module.exports = function makeObjProp(name, value) {
  return setProp(name, {}, value);
};
