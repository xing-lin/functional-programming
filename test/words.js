const words = require("../words");
const unique = require("../unique");
const compose = require("../compose");
const pipe = require("../pipe");

const text =
  "To compose two functions together, pass the \
output of the first function call as the input of the \
second function call.";

// const wordsFound = words(text);
// const wordsUsed = unique(wordsFound);

function skipShortWords(list) {
  var filteredList = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i].length > 4) {
      filteredList.push(list[i]);
    }
  }
  return filteredList;
}

var biggerWords = compose(skipShortWords, unique, words);
var wordsUsed = biggerWords(text);
console.log(wordsUsed);

var biggerWords2 = pipe(words, unique, skipShortWords);
var wordsUsed2 = biggerWords2(text);
console.log(wordsUsed2);
