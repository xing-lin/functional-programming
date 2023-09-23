// function outer() {
//   var one = 1;
//   var two = 2;

//   return function inner() {
//     return one + two;
//   };
// }

// var three = outer();

// three();

// var obj = {
//   one: 1,
//   two: 2,
// };

// function three(outer) {
//   return outer.one + outer.two;
// }

// three(obj);

// {
//   var person = {
//     name: "Kyle Simpson",
//     address: {
//       street: "123 Easy St",
//       city: "JS’ville",
//       state: "ES",
//     },
//   };

//   function outer() {
//     var name = "Kyle Simpson";

//     return middle();

//     function middle() {
//       var street = "123 Easy St";
//       var city = "JS’ville";
//       var state = "ES";

//       return function inner() {
//         return [name, street, city, state];
//       };
//     }
//   }
// }

// function point(x1, y1) {
//   return function disFromPoint(x2, y2) {
//     return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//   };
// }

// var pointDistance = point(1, 1);

// console.log(pointDistance(4, 5));

// function pointDistance(point, x2, y2) {
//   return Math.sqrt(Math.pow(x2 - point.x, 2) + Math.pow(y2 - point.y, 2));
// }

// function trackEvent(evt, keypresses = () => []) {
//   return function newKeypresses() {
//     return [...keypresses(), evt];
//   };
// }

// var keypresses = trackEvent("click");

// keypress = trackEvent("dbclick", keypresses);

// console.log(keypress());

function foo(x) {
  if (x < 5) return x;
  return foo(x / 2);
}

console.log(foo(16));
