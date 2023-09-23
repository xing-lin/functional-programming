module.exports = function setProp(name, obj, val) {
  var o = Object.assign({}, obj);
  o[name] = val;
  return o;
};
