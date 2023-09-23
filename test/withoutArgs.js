const compose = require("../compose");
const makeObjProp = require("../makeObjProp");
const output = require("../output");
const partial = require("../partial");
const partialRight = require("../partialRight");
const pipe = require("../pipe");
const prop = require("../prop");
const setProp = require("../setProp");

function ajax(a, b, c) {
  if (a === "http://some.api/person") {
    return { name: "里斯" };
  }
  if (a === "http://some.api/order") {
    return { personId: 1 };
  }
}

var getPerson = partial(ajax, "http://some.api/person");

var getLastOrder = partial(ajax, "http://some.api/order", { id: -1 });

// getLastOrder(function orderFound(order) {
//   getPerson({ id: order.personId }, function personFound(person) {
//     output(person.name);
//   });
// });

// function extractName(person) {
//   return person.name;
// }

const extractName = partial(prop, "name");

const outputPersonName = compose(output, extractName);

const processPerson = partialRight(getPerson, outputPersonName);

getLastOrder(function orderFound(order) {
  processPerson({ id: order.personId });
});

const extractPersonId = partial(prop, "personId");
const personData = partial(makeObjProp, "id");

const lookupPerson = compose(processPerson, personData, extractPersonId);

const a = lookupPerson({ personId: 2 });

console.log("a->", a);
