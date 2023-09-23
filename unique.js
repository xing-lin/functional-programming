module.exports = function unique(list) {
  var uniqList = [];
  for (var i = 0; i < list.length; i++) {
    if (uniqList.indexOf(list[i]) === -1) {
      uniqList.push(list[i]);
    }
  }
  return uniqList;
};
